#!/usr/bin/node
const req = require('request');

req.get('https://swapi-api.hbtn.io/api/films/' + process.argv[2], { json: true }, function (err, resp, body) {
  if (err) {
    console.error(err);
  } else {
    const data = body.characters;
    for (const char of data) {
      req.get(char, { json: true }, function (err, data, body) {
        if (err) {
          console.error(err);
        } else {
          console.log(body.name);
        }
      });
    }
  }
});
