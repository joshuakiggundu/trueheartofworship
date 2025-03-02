const MixinMusicCardTemplate = (songTitle,coverImage) => {
  let tt = `

    <div class="music-card-item" style="background-image: url(${coverImage});">
        <div class="music-content">
            <div class="icon-reach">
                <div  class="will-play">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="lucide lucide-play">
                        <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                </div>
                <div class="playing">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="lucide lucide-audio-lines">
                        <path d="M2 10v3" />
                        <path d="M6 6v11" />
                        <path d="M10 3v18" />
                        <path d="M14 8v7" />
                        <path d="M18 5v13" />
                        <path d="M22 10v3" />
                    </svg>
                 </div>
            </div>
            <h2 class="music-card-title">${songTitle}</h2>
        </div>
    </div>
    
    `;
  return tt;
};

const PreloadMusicCardsInTemplate = (songs, parentElement) => {
  songs.forEach((song) => {
    let derivedElement = MixinMusicCardTemplate(song.title,song.cover);
    parentElement.insertAdjacentHTML("afterbegin", derivedElement);
  });
};

export class MusicCodeBasePLayer {
  /**
   * Common set
   */
  songs = [];
  currentSongIndex = 0;

  /**
   * Elements;
   */

  parentMusicCardContainer = document.querySelector(".new-life-music-cards");

  audioPlayer = document.getElementById("audioPlayer");
  playPauseButton = document.getElementById("playPauseButton");
  progressBar = document.getElementById("progressBar");
  songTitle = document.getElementById("songTitle");

  //heroSection
  heroSection = document.getElementById("heroSection");

  //controls
  prevButton = document.getElementById("prevButton");
  nextButton = document.getElementById("nextButton");

  constructor(songs) {
    this.intiatlizePlayer(songs);
  }

  /**
   *
   * Used to intialize the player
   *
   */
  intiatlizePlayer(songs) {
    //Get all received songs and add them to the mainSongsInterface
    this.songs = this.songs.concat(songs);
    this.clickPlayEvents();
    PreloadMusicCardsInTemplate(songs, this.parentMusicCardContainer);
    console.log("recieved-songs",this.songs)
    this.playSongBasedOnOptions(this.songs[0]);
  }

  /**
   * request Audio Player to Play song
   */

  requestAudiPlayerToPlaySong(song) {
    this.audioPlayer.src = song.mp3;
    this.audioPlayer.play().catch(function (error) {
      console.log("Playback prevented:", error);
    });
  }

  /**
   * Update playPauseButton
   */
  updatePlayPauseButton() {
    if (this.audioPlayer.paused) {
      this.playPauseButton.innerHTML = "&#9654;";
    } else {
      this.playPauseButton.innerHTML = "&#10074;&#10074;";
    }
  }

  //common events

  clickPlayEvents() {
    this.playPauseButton.addEventListener("click",  ()=> {
      if (this.audioPlayer.paused) {
        this.audioPlayer.play();
      } else {
        this.audioPlayer.pause();
      }
      this.updatePlayPauseButton();
    });

    this.prevButton.addEventListener("click", () => {
      this.currentSongIndex =
        (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
      this.playSongBasedOnOptions(this.songs[this.currentSongIndex]);
    });

    this.nextButton.addEventListener("click", () => {
      this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
      this.playSongBasedOnOptions(this.songs[this.currentSongIndex]);
    });

    this.audioPlayer.addEventListener("timeupdate", () => {
      var progress =
        (this.audioPlayer.currentTime / this.audioPlayer.duration) * 100;
      this.progressBar.style.width = progress + "%";
    });
  }

  /**
   * Play Song Function
   *
   */

  playSongBasedOnOptions(song) {

    console.log(song)

    /**
     * Replace The Player Background based on the currrent song
     */
    this.heroSection.style.backgroundImage = `url(${song.cover})`;
    this.heroSection.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Blackish overlay
    this.heroSection.style.backgroundBlendMode = "overlay"; // Blends the blackish color with the image

    //replace the songtitle
    this.songTitle.innerText = song.title;
    this.songTitle.style.color = "white";

    /**
     * Play the current song
     */
    this.requestAudiPlayerToPlaySong(song);
    this.updatePlayPauseButton();
    this.updateMusicCards();
  }

  //updateMusicCards

  updateMusicCards() {
    //music-card-items
    let cards = this.parentMusicCardContainer.querySelectorAll(".music-card-item");

    cards.forEach((card, index) => {
      if (index === this.currentSongIndex) {
        this.changeIconReachOFElement(card, true);
      } else {
        this.changeIconReachOFElement(card, false);
      }
    });
  }

  changeIconReachOFElement(element, isPlaying) {
    let iconReachPlaying = element.querySelector(".playing");
    let iconReachWillPlay = element.querySelector(".will-play");

    if (isPlaying) {
      iconReachPlaying.style.display = "none";
      iconReachWillPlay.style.display = "block";
    } else {
      iconReachPlaying.style.display = "block";
      iconReachWillPlay.style.display = "none";
    }
  }
}
