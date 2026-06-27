#!/bin/sh

echo "Docker Action Started"

USERNAME=$1

echo "Hello $USERNAME from Docker Action"

bun run index.ts "$USERNAME"