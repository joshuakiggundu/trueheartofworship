import { fetchMusicDataQuery } from "../Queries/musicDataQuery";

document.addEventListener("DOMContentLoaded", function () {
  fetchMusicDataQuery().then((musicData) => {
    var songs = [];

    let __cdata = musicData.newLifeMusicPages;

    console.log("MUSIC-DATA",__cdata)
    __cdata.forEach((item) => {
      let musicComponent = {
        mp3: item.song.url,
        title: item.musicId,
        artist: "Young & Free",
        rating: "5",
        buy: "Buy",
        price: "123",
        duration: item.duration,
        cover: item.musicCoverImage.url,
      };

      songs.push(musicComponent);
    });

    var currentSongIndex = 0;
    var audioPlayer = document.getElementById("audioPlayer");
    var playPauseButton = document.getElementById("playPauseButton");
    var progressBar = document.getElementById("progressBar");

    function displaySong(song) {
      var heroSection = document.getElementById("heroSection");
      heroSection.style.backgroundImage = `url(${song.cover})`;
      heroSection.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Blackish overlay
      heroSection.style.backgroundBlendMode = "overlay"; // Blends the blackish color with the image

      var songTitle = document.getElementById("songTitle");
      songTitle.innerText = song.title;
      songTitle.style.color = "white"; // Ensures the title is white

      audioPlayer.src = song.mp3;
      audioPlayer.play().catch(function (error) {
        console.log("Playback prevented:", error);
      });

      updatePlayPauseButton();
      updateMusicCards();
    }

    function updatePlayPauseButton() {
      if (audioPlayer.paused) {
        playPauseButton.innerHTML = "&#9654;";
      } else {
        playPauseButton.innerHTML = "&#10074;&#10074;";
      }
    }

    function updateMusicCards() {
      var musicCards = document.querySelectorAll(".music-card");
      musicCards.forEach(function (card, index) {
        if (index === currentSongIndex) {
          card.classList.add("playing");
        } else {
          card.classList.remove("playing");
        }
      });
    }

    playPauseButton.addEventListener("click", function () {
      if (audioPlayer.paused) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
      updatePlayPauseButton();
    });

    document
      .getElementById("prevButton")
      .addEventListener("click", function () {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        displaySong(songs[currentSongIndex]);
      });

    document
      .getElementById("nextButton")
      .addEventListener("click", function () {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        displaySong(songs[currentSongIndex]);
      });

    audioPlayer.addEventListener("timeupdate", function () {
      var progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      progressBar.style.width = progress + "%";
    });

    window.displaySong = function (song, index) {
      currentSongIndex = index;
      displaySong(song);
    };

    var musicCards = document.getElementById("musicCards");
    songs.forEach(function (song, index) {
      var card = document.createElement("li");
      card.classList.add(
        "filterall",
        "filter-gallery",
        "eg-gallery-wrapper",
        "music-card"
      );
      card.innerHTML = `
                <div class="esg-media-cover-wrapper">
                    <div class="esg-entry-media">
                        <img src="${song.cover}" alt="${song.title}">
                    </div>
                    <div class="esg-entry-cover esg-fade" data-delay="0">
                        <div class="esg-overlay esg-fade eg-gallery-container" data-delay="0"></div>
                        <div class="esg-center eg-gallery-element-0-a esg-falldown" data-delay="0.1">
                            <a class="eg-gallery-element-0 esgbox" href="javascript:void(0)" onclick='displaySong(${JSON.stringify(
                              song
                            )}, ${index})'>
                                <i class="eg-icon-play play-icon"></i>
                            </a>
                        </div>
                        <div class="esg-center eg-gallery-element-8 esg-none esg-clear"></div>
                    </div>
                </div>
                <div class="song-title">${song.title}</div>
            `;
      musicCards.appendChild(card);
    });

    // Display the first song on page load
    displaySong(songs[0]);
  });
});
