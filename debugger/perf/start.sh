#!/bin/bash

/home/rafaelgss/.nvm/versions/node/v12.13.1/bin/node --perf-basic-prof ./node_modules/.bin/ts-node index.ts &
PID=$!

/home/rafaelgss/.nvm/versions/node/v12.13.1/bin/autocannon -c 100 -d 20 -p 10 http://localhost:3000 &
sudo perf record -F 99 -p $PID -g -- sleep 30;

sudo chown root /tmp/perf-$PID.map
sudo perf script > nodestacks
echo "Killing: $PID"
kill $PID
