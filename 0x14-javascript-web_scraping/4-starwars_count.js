#!/usr/bin/node
const req = require('request');

req.get(process.argv[2], { json: true }, function (err, resp, body) {
  if (err) {
    console.error(err);
  } else {
    let count = 0;
    const data = body.results;
    for (const key of data) {
      for (const c of key.characters) {
        if (c.includes('18')) {
          count++;
        }
      }
    }
    console.log(count);
  }
});
