import { fetchMusicDataQuery } from "../Queries/musicDataQuery";
import { MusicCodeBasePLayer } from "./music/codebase";

fetchMusicDataQuery().then((musicData) => {
  var songs = [];

  let __cdata = musicData.newLifeMusicPages;

  console.log("MUSIC-DATA", __cdata);
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
  new MusicCodeBasePLayer(songs);
});
