#!/usr/bin/node
if (isNaN(process.argv[2])) console.log('Missing size');
const number = Number(process.argv[2]);
for (let i = 0; i < number; i++) {
  for (let j = 0; j < number; j++) {
    process.stdout.write('X');
  }
  console.log('');
}
