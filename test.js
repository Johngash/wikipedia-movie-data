let cheerio = require("cheerio");
let promisify = require("util").promisify;
let request = promisify(require("request"));
async function fetchDat() {
  const url = "https://en.wikipedia.org/wiki/List_of_American_films_of_2025";
  let res = await request({
    url: url,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
    },
  });

  return res.body;
}

async function scrape() {
  const body = await fetchDat();
  const $ = cheerio.load(body);
  console.log($("td").first().text());
}
scrape();
