var a=Object.defineProperty;var r=(s,e,t)=>e in s?a(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var i=(s,e,t)=>r(s,typeof e!="symbol"?e+"":e,t);import{g as l,G as c}from"./gql-B2A7gsmw.js";const u=new c("https://eu-west-2.cdn.hygraph.com/content/cm7lst6j601e106ux6nfp97jn/master"),d=l`


{
  newLifeMusicPages {
    musicId
    musicCoverImage {
      url
    }
    duration
    song {
      url
    }
  }
}
`;function h(){return u.request(d)}const g=(s,e)=>`

    <div class="music-card-item" style="background-image: url(${e});">
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
            <h2 class="music-card-title">${s}</h2>
        </div>
    </div>
    
    `,y=(s,e)=>{s.forEach(t=>{let n=g(t.title,t.cover);e.insertAdjacentHTML("afterbegin",n)})};class p{constructor(e){i(this,"songs",[]);i(this,"currentSongIndex",0);i(this,"parentMusicCardContainer",document.querySelector(".new-life-music-cards"));i(this,"audioPlayer",document.getElementById("audioPlayer"));i(this,"playPauseButton",document.getElementById("playPauseButton"));i(this,"progressBar",document.getElementById("progressBar"));i(this,"songTitle",document.getElementById("songTitle"));i(this,"heroSection",document.getElementById("heroSection"));i(this,"prevButton",document.getElementById("prevButton"));i(this,"nextButton",document.getElementById("nextButton"));this.intiatlizePlayer(e)}intiatlizePlayer(e){this.songs=this.songs.concat(e),this.clickPlayEvents(),y(e,this.parentMusicCardContainer),console.log("recieved-songs",this.songs),this.playSongBasedOnOptions(this.songs[0])}requestAudiPlayerToPlaySong(e){this.audioPlayer.src=e.mp3,this.audioPlayer.play().catch(function(t){console.log("Playback prevented:",t)})}updatePlayPauseButton(){this.audioPlayer.paused?this.playPauseButton.innerHTML="&#9654;":this.playPauseButton.innerHTML="&#10074;&#10074;"}clickPlayEvents(){this.playPauseButton.addEventListener("click",()=>{this.audioPlayer.paused?this.audioPlayer.play():this.audioPlayer.pause(),this.updatePlayPauseButton()}),this.prevButton.addEventListener("click",()=>{this.currentSongIndex=(this.currentSongIndex-1+this.songs.length)%this.songs.length,this.playSongBasedOnOptions(this.songs[this.currentSongIndex])}),this.nextButton.addEventListener("click",()=>{this.currentSongIndex=(this.currentSongIndex+1)%this.songs.length,this.playSongBasedOnOptions(this.songs[this.currentSongIndex])}),this.audioPlayer.addEventListener("timeupdate",()=>{var e=this.audioPlayer.currentTime/this.audioPlayer.duration*100;this.progressBar.style.width=e+"%"})}playSongBasedOnOptions(e){console.log(e),this.heroSection.style.backgroundImage=`url(${e.cover})`,this.heroSection.style.backgroundColor="rgba(0, 0, 0, 0.7)",this.heroSection.style.backgroundBlendMode="overlay",this.songTitle.innerText=e.title,this.songTitle.style.color="white",this.requestAudiPlayerToPlaySong(e),this.updatePlayPauseButton(),this.updateMusicCards()}updateMusicCards(){this.parentMusicCardContainer.querySelectorAll(".music-card-item").forEach((t,n)=>{n===this.currentSongIndex?this.changeIconReachOFElement(t,!0):this.changeIconReachOFElement(t,!1)})}changeIconReachOFElement(e,t){let n=e.querySelector(".playing"),o=e.querySelector(".will-play");t?(n.style.display="none",o.style.display="block"):(n.style.display="block",o.style.display="none")}}h().then(s=>{var e=[];let t=s.newLifeMusicPages;console.log("MUSIC-DATA",t),t.forEach(n=>{let o={mp3:n.song.url,title:n.musicId,artist:"Young & Free",rating:"5",buy:"Buy",price:"123",duration:n.duration,cover:n.musicCoverImage.url};e.push(o)}),new p(e)});
