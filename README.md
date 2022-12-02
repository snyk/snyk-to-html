[![Snyk logo](https://snyk.io/style/asset/logo/snyk-print.svg)](https://snyk.io)

---

# Snyk JSON to HTML Mapper

The Snyk JSON to HTML Mapper takes the json outputted from `snyk test --json` and creates a local HTML file displaying the vulnerabilities discovered.

# How do I use it?

## Install or clone

First, Install the Snyk JSON to HTML Mapper using npm:

`npm install snyk-to-html -g`

Alternatively, you can clone the repo and run the script locally using:

```javascript
npm install
npm run build
node ./dist/index.js
```

## Options

| Short | Long                       | Description                                                                                                      |
| ----- | -------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `-t`  | `--template`               | Template location for generating the html. Defaults to template/test-report.hbs<br/><br/>If using a custom template, snyk-to-html expects the template to be installed in the package's templates folder, regardless of any path specified in the `-t` argument. By default, this folder resides at `{npm_prefix}/lib/node_modules/snyk-to-html/template` |
| `-i`  | `--input`                  | Input path from where to read the json. Defaults to stdin                                                        |
| `-o`  | `--output`                 | Output of the resulting HTML. Example: -o snyk.html. Defaults to stdout                                          |
| `-s`  | `--summary`                | Generates an HTML with only the summary, instead of the details report. Defaults to details vulnerability report |
| `-d`  | `--debug`                  | Runs the CLI in debug mode                                                                                       |
| `-a`  | `--actionable-remediation` | Display actionable remediation info if available                                                                 |

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

   Note input files should be valid JSON and use UTF-8 encoding.

3. If you want a simpler version of the report to be shown, you can pass `-s` or `--summary` to only
   display the summary of the report.

   `snyk-to-html -i results.json -o results.html -s`

4. Show actionable remediation:

   To display the actions you can take to remedy vulnerabilities, pass `-a` or `--actionable-remediation`.

   `snyk-to-html -i results.json -o results.html -a`

   The report orders remediations (upgrades and patches) by the number and severity of vulnerabilities it fixes.
   Use this to guide when selecting the order to upgrade and patch packages.

   Note we currently support remediation advice with the following package managers:

   * npm
   * yarn
   * rubygems
   * maven
   * gradle
   * sbt
   * pip

## View the HTML report

Simply open your new file (`results.html` above) in a browser, and rejoice.

### License

[License: Apache License, Version 2.0](LICENSE)
