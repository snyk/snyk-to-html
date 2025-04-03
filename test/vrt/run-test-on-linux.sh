#! /usr/bin/env sh
set -eu
npm run build

PLAYWRIGHT_VERSION=$(jq -r '.devDependencies."@playwright/test"' package.json)
# Remove the caret marker, which I hope will always be there.
PLAYWRIGHT_VERSION="${PLAYWRIGHT_VERSION#?}"

DOCKER_RUN="docker run --rm --network host -e CI=true -v $(pwd):/app/ -w /app/ -it mcr.microsoft.com/playwright:v$PLAYWRIGHT_VERSION-jammy \"\$@\""

echo $DOCKER_RUN
eval "$DOCKER_RUN"
