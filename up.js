#!/usr/bin/env node

var join = require('path').join
var spawn = require('child_process').spawn

const filepath = join(__dirname, 'docker-compose.yml')

const args = [
  '--project-name',
  'blockai',
  '-f',
  filepath,
  'up',
  '-d',
]
spawn('docker-compose', args, { stdio: 'inherit' })