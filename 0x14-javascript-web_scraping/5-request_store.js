#!/usr/bin/node
const req = require('request');
const fs = require('fs');
req.get(process.argv[2], function (err, resp, body) {
  if (err) {
    console.error(err);
  } else {
    fs.writeFileSync(process.argv[3], body, 'utf-8', function (err) {
      console.error(err);
    });
  }
});
