import { youtube } from "scrape-youtube";
// const { youtube } = require('scrape-youtube');

const foundVideos = [];
youtube.search("Solo levelling trailer").then((results) => {
  // Unless you specify a custom type you will only receive 'video' results
  console.log(results.videos.length);
  for (let i = 0; i < results.videos.length; i++) {
    foundVideos.push(results);
  }
  console.log(foundVideos.length);
});

// or
// const { videos } = await youtube.search("Solo levelling trailer");
