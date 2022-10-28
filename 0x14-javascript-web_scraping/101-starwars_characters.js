#!/usr/bin/node

const request = require('request');
function fetchData (url) {
  return new Promise(function (resolve, reject) {
    request(url, function (error, res, body) {
      if (!error && res.statusCode === 200) {
        resolve(JSON.parse(body));
      } else {
        reject(error);
      }
    });
  });
}

async function getAll () {
  try {
    const movie = await fetchData('https://swapi-api.hbtn.io/api/films/' + process.argv[2]);
    for (const characterUrl of movie.characters) {
      const character = await fetchData(characterUrl);
      console.log(character.name);
    }
  } catch (error) {
    console.error(error);
  }
}

getAll();
