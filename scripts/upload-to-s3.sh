#!/usr/bin/env bash
set -euo pipefail # e fail on exit codes of individual commands, u fails on unset vars, o fails on pipe related errors

declare -a StaticFiles=(
  "snyk-to-html-alpine"
  "snyk-to-html-linux"
  "snyk-to-html-macos"
  "snyk-to-html-win.exe"
  "snyk-to-html-alpine.sha256"
  "snyk-to-html-linux.sha256"
  "snyk-to-html-macos.sha256"
  "snyk-to-html-win.exe.sha256"
)

# Upload files to the versioned folder
for filename in "${StaticFiles[@]}"; do
  aws s3 cp "${filename}" "s3://${PUBLIC_S3_BUCKET}/snyk-to-html/v${1}/"
done

# Upload files to the /latest folder
for filename in "${StaticFiles[@]}"; do
  aws s3 cp "${filename}" "s3://${PUBLIC_S3_BUCKET}/snyk-to-html/latest/"
done
