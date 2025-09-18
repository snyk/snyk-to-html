#! /usr/bin/env sh
set -eu
npm run build

PLAYWRIGHT_VERSION=$(npx playwright --version | grep -Eo '[0-9]+\.[0-9]+\.[0-9]+')
echo "PLAYWRIGHT VERSION" $PLAYWRIGHT_VERSION

DOCKER_RUN="docker run --rm --network host -e CI=true -v $(pwd):/app/ -w /app/ -it mcr.microsoft.com/playwright:v$PLAYWRIGHT_VERSION-jammy \"\$@\""

echo $DOCKER_RUN
eval "$DOCKER_RUN"
