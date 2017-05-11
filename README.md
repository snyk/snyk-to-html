[![Snyk logo](https://snyk.io/style/asset/logo/snyk-print.svg)](https://snyk.io)

***

# Snyk JSON to HTML Mapper
The Snyk JSON to HTML Mapper takes the json outputted from `snyk test --json` and creates a local HTML file displaying the vulnerabilities discovered as well as a list of all dependencies.

# How do I use it?

1. Install the Snyk JSON to HTML Mapper using npm

   `npm install snyk-to-html -g`

   Alternatively, you can skip this step, clone the repo and run the script locally (using `node ./snyk-to-html.js`)

2. Generate JSON data by running `snyk test` and save the output to a file

   `snyk test --json > results.json`

3. Pass the resulting JSON file to Snyk's JSON to HTML Mapper

   `snyk-to-html -i results.json > results.html`

4. Open your new file (`results.html` above), and rejoice.

### License

[License: Apache License, Version 2.0](LICENSE)