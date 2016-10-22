#!/usr/bin/env node

var join = require('path').join
var childProcess = require('child_process')
var spawn = childProcess.spawn
var execSync = childProcess.execSync
const dcArgs = process.argv.slice(2)

const filepath = join(__dirname, 'docker-compose.yml')

// Make sure docker-compose always at same path, otherwise
// docker-compose does weird things
execSync('mkdir -p /tmp/blockai-dc')
execSync(`cp "${filepath}" /tmp/blockai-dc/docker-compose.yml`)

const args = [
  '--project-name',
  'blockai',
  '-f',
  '/tmp/blockai-dc/docker-compose.yml',
].concat(dcArgs)

spawn('docker-compose', args, { stdio: 'inherit' })