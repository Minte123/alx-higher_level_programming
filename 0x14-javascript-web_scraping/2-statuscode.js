#!/usr/bin/node
const req = require('request');

req.get(process.argv[2], function (err, resp, body) {
  if (err) {
    console.error(err);
  } else {
    console.log('code:', resp.statusCode);
  }
});
