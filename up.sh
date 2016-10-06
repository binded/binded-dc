#!/bin/bash
basepath=$(dirname "$BASH_SOURCE")
dcfile="$basepath/docker-compose.yml"
docker-compose --project-name blockai -f "$dcfile" up -d