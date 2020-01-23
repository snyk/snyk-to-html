[![Snyk logo](https://snyk.io/style/asset/logo/snyk-print.svg)](https://snyk.io)

***

# Snyk JSON to HTML Mapper
The Snyk JSON to HTML Mapper takes the json outputted from `snyk test --json` and creates a local HTML file displaying the vulnerabilities discovered.

# How do I use it?

## Install or clone

First, Install the Snyk JSON to HTML Mapper using npm:

`npm install snyk-to-html -g`

Alternatively, you can skip this step, clone the repo and run the script locally (using `node ./snyk-to-html.js`)

## Options of the CLI

1. `-t` or `--template`-  Template location for generating the html. Defaults to template/test-report.hbs
2. `-i` or `--input`   -  Input path from where to read the json. Defaults to stdin
3. `-o` or `--output`  -  Output of the resulting HTML. Example: -o snyk.html. Defaults to stdout
4. `-s` or `--summary` -  Generates an HTML with only the summary, instead of the details report. Defaults to details vulnerability report

When in doubt, use `snyk-to-html --help` or `snyk-to-html -h`.

## Generate the HTML report

Change directory to your package's root folder, then use of the two ways below to generate the HTML report.

1. Directly streaming the results to snyk-to-html:

   Run the following line to create a file called `results.html`:
   
   `snyk test --json | snyk-to-html -o results.html`

2. Using a temporary file:

   Generate JSON data by running `snyk test` and save the output to a file

   `snyk test --json > results.json`

   Pass the resulting JSON file to Snyk's JSON to HTML Mapper

   `snyk-to-html -i results.json -o results.html`

3. By default, details about each vulnerability is shown. 

    If you want a simpler version of the report to be shown, you can pass `-s` or `--summary` to only
    display the summary of the report.

    `snyk-to-html -i results.json -o results.html -s`

## View the HTML report

   Simply open your new file (`results.html` above) in a browser, and rejoice.

### License

[License: Apache License, Version 2.0](LICENSE)

