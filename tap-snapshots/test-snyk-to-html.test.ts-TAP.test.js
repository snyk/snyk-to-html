/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/snyk-to-html.test.ts TAP IaC input - test snyk-to-html handles -s argument correctly > should be expected snapshot containing summary template 1`] = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Language" content="en-us">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Snyk test report</title>
  <meta name="description" content=" known vulnerabilities found in .">
  <base target="_blank">
  <link rel="icon" type="image/png" href="https://res.cloudinary.com/snyk/image/upload/v1468845142/favicon/favicon.png"
    sizes="194x194">
  <link rel="shortcut icon" href="https://res.cloudinary.com/snyk/image/upload/v1468845142/favicon/favicon.ico">
  <style type="text/css">
  
    body {
      -moz-font-feature-settings: "pnum";
      -webkit-font-feature-settings: "pnum";
      font-variant-numeric: proportional-nums;
      display: flex;
      flex-direction: column;
      font-feature-settings: "pnum";
      font-size: 100%;
      line-height: 1.5;
      min-height: 100vh;
      -webkit-text-size-adjust: 100%;
      margin: 0;
      padding: 0;
      background-color: #F5F5F5;
      font-family: 'Arial', 'Helvetica', Calibri, sans-serif;
    }
  
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 500;
    }
  
    a,
    a:link,
    a:visited {
      border-bottom: 1px solid #4b45a9;
      text-decoration: none;
      color: #4b45a9;
    }
  
    a:hover,
    a:focus,
    a:active {
      border-bottom: 1px solid #4b45a9;
    }
  
    hr {
      border: none;
      margin: 1em 0;
      border-top: 1px solid #c5c5c5;
    }
  
    ul {
      padding: 0 1em;
      margin: 1em 0;
    }
  
    code {
      background-color: #EEE;
      color: #333;
      padding: 0.25em 0.5em;
      border-radius: 0.25em;
    }
  
    pre {
      background-color: #333;
      font-family: monospace;
      padding: 0.5em 1em 0.75em;
      border-radius: 0.25em;
      font-size: 14px;
    }
  
    pre code {
      padding: 0;
      background-color: transparent;
      color: #fff;
    }
  
    a code {
      border-radius: .125rem .125rem 0 0;
      padding-bottom: 0;
      color: #4b45a9;
    }
  
    a[href^="http://"]:after,
    a[href^="https://"]:after {
      background-image: linear-gradient(transparent,transparent),url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20112%20109%22%3E%3Cg%20id%3D%22Page-1%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22link-external%22%3E%3Cg%20id%3D%22arrow%22%3E%3Cpath%20id%3D%22Line%22%20stroke%3D%22%234B45A9%22%20stroke-width%3D%2215%22%20d%3D%22M88.5%2021l-43%2042.5%22%20stroke-linecap%3D%22square%22%2F%3E%3Cpath%20id%3D%22Triangle%22%20fill%3D%22%234B45A9%22%20d%3D%22M111.2%200v50L61%200z%22%2F%3E%3C%2Fg%3E%3Cpath%20id%3D%22square%22%20fill%3D%22%234B45A9%22%20d%3D%22M66%2015H0v94h94V44L79%2059v35H15V30h36z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");
      background-repeat: no-repeat;
      background-size: .75rem;
      content: "";
      display: inline-block;
      height: .75rem;
      margin-left: .25rem;
      width: .75rem;
    }
  
  
  /* Layout */
  
    [class*=layout-container] {
      margin: 0 auto;
      max-width: 71.25em;
      padding: 1.9em 1.3em;
      position: relative;
    }
    .layout-container--short {
      padding-top: 0;
      padding-bottom: 0;
      max-width: 48.75em;
    }
  
    .layout-container--short:after {
      display: block;
      content: "";
      clear: both;
    }
  
  /* Header */
  
    .header {
      padding-bottom: 1px;
    }
  
    .paths {
      margin-left: 8px;
    }
    .header-wrap {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 2em;
    }
    .project__header {
      background-color: #4b45a9;
      color: #fff;
      margin-bottom: -1px;
      padding-top: 1em;
      padding-bottom: 0.25em;
      border-bottom: 2px solid #BBB;
    }
  
    .project__header__title {
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-all;
      margin-bottom: .1em;
      margin-top: 0;
    }
  
    .timestamp {
      float: right;
      clear: none;
      margin-bottom: 0;
    }
  
    .meta-counts {
      clear: both;
      display: block;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 0 1.5em;
      color: #fff;
      clear: both;
      font-size: 1.1em;
    }
  
    .meta-count {
      display: block;
      flex-basis: 100%;
      margin: 0 1em 1em 0;
      float: left;
      padding-right: 1em;
      border-right: 2px solid #fff;
    }
  
    .meta-count:last-child {
      border-right: 0;
      padding-right: 0;
      margin-right: 0;
    }
  
  /* Card */
  
    .card {
      background-color: #fff;
      border: 1px solid #c5c5c5;
      border-radius: .25rem;
      margin: 0 0 2em 0;
      position: relative;
      min-height: 40px;
      padding: 1.5em;
    }
  
    .card .label {
      background-color: #767676;
      border: 2px solid #767676;
      color: white;
      padding: 0.25rem 0.75rem;
      font-size: 0.875rem;
      text-transform: uppercase;
      display: inline-block;
      margin: 0;
      border-radius: 0.25rem;
    }
  
    .card .label__text {
      vertical-align: text-top;
        font-weight: bold;
    }
  
    .card .label--critical {
      background-color: #AB1A1A;
      border-color: #AB1A1A;
    }
  
    .card .label--high {
      background-color: #CE5019;
      border-color: #CE5019;
    }
  
    .card .label--medium {
      background-color: #D68000;
      border-color: #D68000;
    }
  
    .card .label--low {
      background-color: #88879E;
      border-color: #88879E;
    }
  
    .severity--low {
      border-color: #88879E;
    }
  
    .severity--medium {
      border-color: #D68000;
    }
  
    .severity--high {
      border-color: #CE5019;
    }
  
    .severity--critical {
      border-color: #AB1A1A;
    }
  
    .card--vuln {
      padding-top: 4em;
    }
  
    .card--vuln .label {
      left: 0;
      position: absolute;
      top: 1.1em;
      padding-left: 1.9em;
      padding-right: 1.9em;
      border-radius: 0 0.25rem 0.25rem 0;
    }
  
    .card--vuln .card__section h2 {
      font-size: 22px;
      margin-bottom: 0.5em;
    }
  
    .card--vuln .card__section p {
      margin: 0 0 0.5em 0;
    }
  
    .card--vuln .card__meta {
      padding: 0 0 0 1em;
      margin: 0;
      font-size: 1.1em;
    }
  
    .card .card__meta__paths {
      font-size: 0.9em;
    }
  
    .card--vuln .card__title {
      font-size: 28px;
      margin-top: 0;
    }
  
    .card--vuln .card__cta p {
      margin: 0;
      text-align: right;
    }
  
    .source-panel {
      clear: both;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      padding: 0.5em 0;
      width: fit-content;
    }
  
  
  
  </style>
  <style type="text/css">
    .metatable {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      margin-top: 12px;
      border-collapse: collapse;
      border-spacing: 0;
      font-variant-numeric: tabular-nums;
      max-width: 51.75em;
    }
  
    tbody {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      display: flex;
      flex-wrap: wrap;
    }
  
    .meta-row {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      outline: none;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      display: flex;
      align-items: start;
      border-top: 1px solid #d3d3d9;
      padding: 8px 0 0 0;
      border-bottom: none;
      margin: 8px;
      width: 47.75%;
    }
  
    .meta-row-label {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      color: #4c4a73;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      margin: 0;
      outline: none;
      text-decoration: none;
      z-index: auto;
      align-self: start;
      flex: 1;
      font-size: 1rem;
      line-height: 1.5rem;
      padding: 0;
      text-align: left;
      vertical-align: top;
      text-transform: none;
      letter-spacing: 0;
    }
  
    .meta-row-value {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      word-break: break-word;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: right;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
    }
  </style>
</head>

<body class="section-projects">
  <main class="layout-stacked">
        <div class="layout-stacked__header header">
          <header class="project__header">
            <div class="layout-container">
              <a class="brand" href="https://snyk.io" title="Snyk">
                <svg width="68px" height="35px" viewBox="0 0 68 35" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img">
                  <title>Snyk - Open Source Security</title>
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g fill="#fff">
                      <path d="M5.732,27.278 C3.445,27.278 1.589,26.885 0,26.124 L0.483,22.472 C2.163,23.296 4.056,23.689 5.643,23.689 C6.801,23.689 7.563,23.295 7.563,22.599 C7.563,20.594 0.333,21.076 0.333,15.839 C0.333,12.491 3.407,10.729 7.259,10.729 C9.179,10.729 11.161,11.249 12.444,11.704 L11.924,15.294 C10.577,14.774 8.747,14.291 7.222,14.291 C6.282,14.291 5.518,14.621 5.518,15.231 C5.518,17.208 12.903,16.815 12.903,21.925 C12.903,25.325 9.877,27.277 5.733,27.277 L5.732,27.278 Z M25.726,26.936 L25.726,17.894 C25.726,15.827 24.811,14.85 23.069,14.85 C22.219,14.85 21.329,15.09 20.719,15.46 L20.719,26.936 L15.352,26.936 L15.352,11.262 L20.602,10.83 L20.474,13.392 L20.652,13.392 C21.784,11.87 23.702,10.716 25.992,10.716 C28.736,10.716 31.112,12.416 31.112,16.436 L31.112,26.936 L25.724,26.936 L25.726,26.936 Z M61.175,26.936 L56.879,19.479 L56.446,19.479 L56.446,26.935 L51.082,26.935 L51.082,8.37 L56.447,0 L56.447,17.323 C57.515,16.017 61.112,11.059 61.112,11.059 L67.732,11.059 L61.454,17.689 L67.949,26.95 L61.175,26.95 L61.175,26.938 L61.175,26.936 Z M44.13,11.11 L41.93,18.262 C41.5,19.606 41.08,22.079 41.08,22.079 C41.08,22.079 40.75,19.516 40.292,18.172 L37.94,11.108 L31.928,11.108 L38.462,26.935 C37.572,29.04 36.199,30.815 34.369,30.815 C34.039,30.815 33.709,30.802 33.389,30.765 L31.255,34.061 C31.928,34.441 33.212,34.835 34.737,34.835 C38.703,34.835 41.359,31.627 43.215,26.885 L49.443,11.108 L44.132,11.108 L44.13,11.11 Z"></path>
                    </g>
                  </g>
                </svg>
              </a>
              <div class="header-wrap">
                  <h1 class="project__header__title">Snyk test summary</h1>
    
                <p class="timestamp">TIMESTAMP</p>
              </div>
                <div class="source-panel">
                  <span>Scanned the following paths:</span>
                  <ul>
                    <li class="paths">/Users/yairzohar/snyk/snyk-iac-arm/app_service_env.json (ARM)</li><li class="paths">/Users/yairzohar/snyk/snyk-iac-arm/front_door.json (ARM)</li><li class="paths">/Users/yairzohar/snyk/snyk-iac-arm/http-triggered_function.json (ARM)</li><li class="paths">/Users/yairzohar/snyk/snyk-iac-arm/traffic_manager.json (ARM)</li><li class="paths">/Users/yairzohar/snyk/snyk-iac-arm/vmms_autoscale.json (ARM)</li><li class="paths">/Users/yairzohar/snyk/snyk-iac-arm/webapp_mysql.json (ARM)</li><li class="paths">/Users/yairzohar/snyk/snyk-iac-arm/wordpress.json (ARM)</li>
                  </ul>
                </div>
    
                <div class="meta-counts">
                  <div class="meta-count"><span>30</span> <span>total issues</span></div>
                </div><!-- .meta-counts -->
            </div><!-- .layout-container--short -->
          </header><!-- .project__header -->
        </div><!-- .layout-stacked__header -->

        <section class="layout-container">
            <table class="metatable">
                <tbody>
                <tr class="meta-row"><th class="meta-row-label">Project</th> <td class="meta-row-value">app_service_env.json</td></tr>
                <tr class="meta-row"><th class="meta-row-label">Path</th> <td class="meta-row-value">/Users/yairzohar/snyk/snyk-iac-arm/app_service_env.json</td></tr>
                <tr class="meta-row"><th class="meta-row-label">Project Type</th> <td class="meta-row-value">ARM</td></tr>
                </tbody>
            </table>
        </section>        <div class="layout-container" style="padding-top: 35px;">
            No known issues detected.
        </div>
         <hr/> 
        <section class="layout-container">
            <table class="metatable">
                <tbody>
                <tr class="meta-row"><th class="meta-row-label">Project</th> <td class="meta-row-value">front_door.json</td></tr>
                <tr class="meta-row"><th class="meta-row-label">Path</th> <td class="meta-row-value">/Users/yairzohar/snyk/snyk-iac-arm/front_door.json</td></tr>
                <tr class="meta-row"><th class="meta-row-label">Project Type</th> <td class="meta-row-value">ARM</td></tr>
                </tbody>
            </table>
        </section>        <div class="layout-container" style="padding-top: 35px;">
            No known issues detected.
        </div>
         <hr/> 
        <section class="layout-container">
            <table class="metatable">
                <tbody>
                <tr class="meta-row"><th class="meta-row-label">Project</th> <td class="meta-row-value">http-triggered_function.json</td></tr>
                <tr class="meta-row"><th class="meta-row-label">Path</th> <td class="meta-row-value">/Users/yairzohar/snyk/snyk-iac-arm/http-triggered_function.json</td></tr>
                <tr class="meta-row"><th class="meta-row-label">Project Type</th> <td class="meta-row-value">ARM</td></tr>
                </tbody>
            </table>
        </section>        <div class="layout-container" style="padding-top: 35px;">
          <div class="cards--vuln filter--patch filter--ignore">
              <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
                  <h2 class="card__title">App Service allows FTP deployments</h2>
                  <div class="card__section">
              
                      <div class="label label--high">
                          <span class="label__text">high severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-533">SNYK-CC-AZURE-533</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[3]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                   <span class="list-paths__item__arrow">›</span> 
                                  ftpsState
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 109
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-533">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
                  <h2 class="card__title">App Service remote debugging enabled</h2>
                  <div class="card__section">
              
                      <div class="label label--medium">
                          <span class="label__text">medium severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-619">SNYK-CC-AZURE-619</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[3]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                   <span class="list-paths__item__arrow">›</span> 
                                  remoteDebuggingEnabled
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 109
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-619">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
                  <h2 class="card__title">Key Vault has soft deletion disabled</h2>
                  <div class="card__section">
              
                      <div class="label label--medium">
                          <span class="label__text">medium severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-625">SNYK-CC-AZURE-625</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[5]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                   <span class="list-paths__item__arrow">›</span> 
                                  enableSoftDelete
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 184
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-625">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
                  <h2 class="card__title">Key Vault purge protection is disabled</h2>
                  <div class="card__section">
              
                      <div class="label label--medium">
                          <span class="label__text">medium severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-624">SNYK-CC-AZURE-624</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[5]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                   <span class="list-paths__item__arrow">›</span> 
                                  enablePurgeProtection
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 184
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-624">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
                  <h2 class="card__title">Missing a description and an owner from tag, or owner tag does not comply with email requirements</h2>
                  <div class="card__section">
              
                      <div class="label label--medium">
                          <span class="label__text">medium severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: CUSTOM-RULE-4 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  input
                                   <span class="list-paths__item__arrow">›</span> 
                                  resource
                                   <span class="list-paths__item__arrow">›</span> 
                                  aws_redshift_cluster[denied2]
                                   <span class="list-paths__item__arrow">›</span> 
                                  tags
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 16
                          </li>
                      </ul>
              
                      
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
                  <h2 class="card__title">Storage Account does not enforce latest TLS</h2>
                  <div class="card__section">
              
                      <div class="label label--medium">
                          <span class="label__text">medium severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-149">SNYK-CC-TF-149</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[0]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                   <span class="list-paths__item__arrow">›</span> 
                                  minimumTlsVersion
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 62
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-149">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
                  <h2 class="card__title">Use two or more App Service Plan instances</h2>
                  <div class="card__section">
              
                      <div class="label label--medium">
                          <span class="label__text">medium severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-618">SNYK-CC-AZURE-618</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[2]
                                   <span class="list-paths__item__arrow">›</span> 
                                  sku
                                   <span class="list-paths__item__arrow">›</span> 
                                  capacity
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 98
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-618">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
                  <h2 class="card__title">App Service HTTP/2 disabled</h2>
                  <div class="card__section">
              
                      <div class="label label--low">
                          <span class="label__text">low severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-163">SNYK-CC-TF-163</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[3]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                   <span class="list-paths__item__arrow">›</span> 
                                  siteConfig
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 111
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-163">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
                  <h2 class="card__title">App Service identity missing</h2>
                  <div class="card__section">
              
                      <div class="label label--low">
                          <span class="label__text">low severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-161">SNYK-CC-TF-161</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[3]
                                   <span class="list-paths__item__arrow">›</span> 
                                  identity
                                   <span class="list-paths__item__arrow">›</span> 
                                  type
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 103
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-161">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
                  <h2 class="card__title">App Service mutual TLS disabled</h2>
                  <div class="card__section">
              
                      <div class="label label--low">
                          <span class="label__text">low severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-162">SNYK-CC-TF-162</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[3]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                   <span class="list-paths__item__arrow">›</span> 
                                  clientCertEnabled
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 109
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-162">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
                  <h2 class="card__title">Redshift cluster logging disabled</h2>
                  <div class="card__section">
              
                      <div class="label label--low">
                          <span class="label__text">low severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-136">SNYK-CC-TF-136</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resource
                                   <span class="list-paths__item__arrow">›</span> 
                                  aws_redshift_cluster[denied2]
                                   <span class="list-paths__item__arrow">›</span> 
                                  logging
                                  
                          </li>
              
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-136">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
                  <h2 class="card__title">Vault accidental key deletion prevention disabled</h2>
                  <div class="card__section">
              
                      <div class="label label--low">
                          <span class="label__text">low severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-175">SNYK-CC-TF-175</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[5]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 184
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-175">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
          </div>
        </div>
         <hr/> 
        <section class="layout-container">
            <table class="metatable">
                <tbody>
                <tr class="meta-row"><th class="meta-row-label">Project</th> <td class="meta-row-value">traffic_manager.json</td></tr>
                <tr class="meta-row"><th class="meta-row-label">Path</th> <td class="meta-row-value">/Users/yairzohar/snyk/snyk-iac-arm/traffic_manager.json</td></tr>
                <tr class="meta-row"><th class="meta-row-label">Project Type</th> <td class="meta-row-value">ARM</td></tr>
                </tbody>
            </table>
        </section>        <div class="layout-container" style="padding-top: 35px;">
          <div class="cards--vuln filter--patch filter--ignore">
              <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
                  <h2 class="card__title">App Service allows FTP deployments</h2>
                  <div class="card__section">
              
                      <div class="label label--high">
                          <span class="label__text">high severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-533">SNYK-CC-AZURE-533</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[1]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                   <span class="list-paths__item__arrow">›</span> 
                                  ftpsState
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 58
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-533">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
                  <h2 class="card__title"> Function App does not enforce HTTPS</h2>
                  <div class="card__section">
              
                      <div class="label label--medium">
                          <span class="label__text">medium severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-500">SNYK-CC-AZURE-500</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[1]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                   <span class="list-paths__item__arrow">›</span> 
                                  httpsOnly
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 58
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-500">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
                  <h2 class="card__title">App Service remote debugging enabled</h2>
                  <div class="card__section">
              
                      <div class="label label--medium">
                          <span class="label__text">medium severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-619">SNYK-CC-AZURE-619</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[1]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                   <span class="list-paths__item__arrow">›</span> 
                                  remoteDebuggingEnabled
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 58
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-619">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
                  <h2 class="card__title">Azure App Service allows HTTP traffic</h2>
                  <div class="card__section">
              
                      <div class="label label--medium">
                          <span class="label__text">medium severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-144">SNYK-CC-TF-144</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[1]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                   <span class="list-paths__item__arrow">›</span> 
                                  httpsOnly
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 58
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-144">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
                  <h2 class="card__title">Use two or more App Service Plan instances</h2>
                  <div class="card__section">
              
                      <div class="label label--medium">
                          <span class="label__text">medium severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-618">SNYK-CC-AZURE-618</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[0]
                                   <span class="list-paths__item__arrow">›</span> 
                                  sku
                                   <span class="list-paths__item__arrow">›</span> 
                                  capacity
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 48
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-618">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
                  <h2 class="card__title">App Service HTTP/2 disabled</h2>
                  <div class="card__section">
              
                      <div class="label label--low">
                          <span class="label__text">low severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-163">SNYK-CC-TF-163</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[1]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                   <span class="list-paths__item__arrow">›</span> 
                                  siteConfig
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 58
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-163">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
                  <h2 class="card__title">App Service identity missing</h2>
                  <div class="card__section">
              
                      <div class="label label--low">
                          <span class="label__text">low severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-161">SNYK-CC-TF-161</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[1]
                                   <span class="list-paths__item__arrow">›</span> 
                                  identity
                                   <span class="list-paths__item__arrow">›</span> 
                                  type
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 53
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-161">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
                  <h2 class="card__title">App Service mutual TLS disabled</h2>
                  <div class="card__section">
              
                      <div class="label label--low">
                          <span class="label__text">low severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-162">SNYK-CC-TF-162</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[1]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                   <span class="list-paths__item__arrow">›</span> 
                                  clientCertEnabled
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 58
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-162">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
          </div>
        </div>
         <hr/> 
        <section class="layout-container">
            <table class="metatable">
                <tbody>
                <tr class="meta-row"><th class="meta-row-label">Project</th> <td class="meta-row-value">vmms_autoscale.json</td></tr>
                <tr class="meta-row"><th class="meta-row-label">Path</th> <td class="meta-row-value">/Users/yairzohar/snyk/snyk-iac-arm/vmms_autoscale.json</td></tr>
                <tr class="meta-row"><th class="meta-row-label">Project Type</th> <td class="meta-row-value">ARM</td></tr>
                </tbody>
            </table>
        </section>        <div class="layout-container" style="padding-top: 35px;">
          <div class="cards--vuln filter--patch filter--ignore">
              <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
                  <h2 class="card__title">Virtual Network DDoS protection plan disabled</h2>
                  <div class="card__section">
              
                      <div class="label label--low">
                          <span class="label__text">low severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-516">SNYK-CC-AZURE-516</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[0]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                   <span class="list-paths__item__arrow">›</span> 
                                  enableDdosProtection
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 98
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-516">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
          </div>
        </div>
         <hr/> 
        <section class="layout-container">
            <table class="metatable">
                <tbody>
                <tr class="meta-row"><th class="meta-row-label">Project</th> <td class="meta-row-value">webapp_mysql.json</td></tr>
                <tr class="meta-row"><th class="meta-row-label">Path</th> <td class="meta-row-value">/Users/yairzohar/snyk/snyk-iac-arm/webapp_mysql.json</td></tr>
                <tr class="meta-row"><th class="meta-row-label">Project Type</th> <td class="meta-row-value">ARM</td></tr>
                </tbody>
            </table>
        </section>        <div class="layout-container" style="padding-top: 35px;">
          <div class="cards--vuln filter--patch filter--ignore">
              <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
                  <h2 class="card__title">App Service allows FTP deployments</h2>
                  <div class="card__section">
              
                      <div class="label label--high">
                          <span class="label__text">high severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-533">SNYK-CC-AZURE-533</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[1]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                   <span class="list-paths__item__arrow">›</span> 
                                  ftpsState
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 139
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-533">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
                  <h2 class="card__title"> Function App does not enforce HTTPS</h2>
                  <div class="card__section">
              
                      <div class="label label--medium">
                          <span class="label__text">medium severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-500">SNYK-CC-AZURE-500</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[1]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                   <span class="list-paths__item__arrow">›</span> 
                                  httpsOnly
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 139
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-500">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
                  <h2 class="card__title">App Service remote debugging enabled</h2>
                  <div class="card__section">
              
                      <div class="label label--medium">
                          <span class="label__text">medium severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-619">SNYK-CC-AZURE-619</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[1]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                   <span class="list-paths__item__arrow">›</span> 
                                  remoteDebuggingEnabled
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 139
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-619">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
                  <h2 class="card__title">Azure App Service allows HTTP traffic</h2>
                  <div class="card__section">
              
                      <div class="label label--medium">
                          <span class="label__text">medium severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-144">SNYK-CC-TF-144</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[1]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                   <span class="list-paths__item__arrow">›</span> 
                                  httpsOnly
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 139
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-144">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
                  <h2 class="card__title">Use two or more App Service Plan instances</h2>
                  <div class="card__section">
              
                      <div class="label label--medium">
                          <span class="label__text">medium severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-618">SNYK-CC-AZURE-618</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[0]
                                   <span class="list-paths__item__arrow">›</span> 
                                  sku
                                   <span class="list-paths__item__arrow">›</span> 
                                  capacity
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 129
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-AZURE-618">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
                  <h2 class="card__title">App Service HTTP/2 disabled</h2>
                  <div class="card__section">
              
                      <div class="label label--low">
                          <span class="label__text">low severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-163">SNYK-CC-TF-163</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[1]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                   <span class="list-paths__item__arrow">›</span> 
                                  siteConfig
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 139
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-163">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
                  <h2 class="card__title">App Service identity missing</h2>
                  <div class="card__section">
              
                      <div class="label label--low">
                          <span class="label__text">low severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-161">SNYK-CC-TF-161</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[1]
                                   <span class="list-paths__item__arrow">›</span> 
                                  identity
                                   <span class="list-paths__item__arrow">›</span> 
                                  type
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 134
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-161">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
              <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
                  <h2 class="card__title">App Service mutual TLS disabled</h2>
                  <div class="card__section">
              
                      <div class="label label--low">
                          <span class="label__text">low severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-162">SNYK-CC-TF-162</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[1]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                   <span class="list-paths__item__arrow">›</span> 
                                  clientCertEnabled
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 139
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-162">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
          </div>
        </div>
         <hr/> 
        <section class="layout-container">
            <table class="metatable">
                <tbody>
                <tr class="meta-row"><th class="meta-row-label">Project</th> <td class="meta-row-value">wordpress.json</td></tr>
                <tr class="meta-row"><th class="meta-row-label">Path</th> <td class="meta-row-value">/Users/yairzohar/snyk/snyk-iac-arm/wordpress.json</td></tr>
                <tr class="meta-row"><th class="meta-row-label">Project Type</th> <td class="meta-row-value">ARM</td></tr>
                </tbody>
            </table>
        </section>        <div class="layout-container" style="padding-top: 35px;">
          <div class="cards--vuln filter--patch filter--ignore">
              <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
                  <h2 class="card__title">SAS token can be used over insecure HTTP</h2>
                  <div class="card__section">
              
                      <div class="label label--medium">
                          <span class="label__text">medium severity</span>
                      </div>
              
                      <hr/>
              
                      <ul class="card__meta">
                          <li class="card__meta__item">
                              Public ID: <a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-244">SNYK-CC-TF-244</a> 
                          </li>
              
                          <li class="card__meta__item">Introduced through:
                                  resources[2]
                                   <span class="list-paths__item__arrow">›</span> 
                                  properties
                                   <span class="list-paths__item__arrow">›</span> 
                                  supportsHttpsTrafficOnly
                                  
                          </li>
              
                          <li class="card__meta__item">
                              Line number: 86
                          </li>
                      </ul>
              
                      <hr/>
              
                  </div><!-- .card__section -->
              
                  <div class="cta card__cta">
                      <p><a href="https://security.snyk.io/rules/cloud//SNYK-CC-TF-244">More about this issue</a></p>
                  </div>
              
              </div><!-- .card -->
          </div>
        </div>
        
  </main><!-- .layout-stacked__content -->
</body>

</html>


`

exports[`test/snyk-to-html.test.ts TAP template output displays vulns in descending order of severity > should be expected snapshot 1`] = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Language" content="en-us">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Snyk test report</title>
  <meta name="description" content="82 known vulnerabilities found in 139 vulnerable dependency paths.">
  <base target="_blank">
  <link rel="icon" type="image/png" href="https://res.cloudinary.com/snyk/image/upload/v1468845142/favicon/favicon.png"
    sizes="194x194">
  <link rel="shortcut icon" href="https://res.cloudinary.com/snyk/image/upload/v1468845142/favicon/favicon.ico">
  <style type="text/css">
  
    body {
      -moz-font-feature-settings: "pnum";
      -webkit-font-feature-settings: "pnum";
      font-variant-numeric: proportional-nums;
      display: flex;
      flex-direction: column;
      font-feature-settings: "pnum";
      font-size: 100%;
      line-height: 1.5;
      min-height: 100vh;
      -webkit-text-size-adjust: 100%;
      margin: 0;
      padding: 0;
      background-color: #F5F5F5;
      font-family: 'Arial', 'Helvetica', Calibri, sans-serif;
    }
  
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 500;
    }
  
    a,
    a:link,
    a:visited {
      border-bottom: 1px solid #4b45a9;
      text-decoration: none;
      color: #4b45a9;
    }
  
    a:hover,
    a:focus,
    a:active {
      border-bottom: 1px solid #4b45a9;
    }
  
    hr {
      border: none;
      margin: 1em 0;
      border-top: 1px solid #c5c5c5;
    }
  
    ul {
      padding: 0 1em;
      margin: 1em 0;
    }
  
    code {
      background-color: #EEE;
      color: #333;
      padding: 0.25em 0.5em;
      border-radius: 0.25em;
    }
  
    pre {
      background-color: #333;
      font-family: monospace;
      padding: 0.5em 1em 0.75em;
      border-radius: 0.25em;
      font-size: 14px;
    }
  
    pre code {
      padding: 0;
      background-color: transparent;
      color: #fff;
    }
  
    a code {
      border-radius: .125rem .125rem 0 0;
      padding-bottom: 0;
      color: #4b45a9;
    }
  
    a[href^="http://"]:after,
    a[href^="https://"]:after {
      background-image: linear-gradient(transparent,transparent),url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20112%20109%22%3E%3Cg%20id%3D%22Page-1%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22link-external%22%3E%3Cg%20id%3D%22arrow%22%3E%3Cpath%20id%3D%22Line%22%20stroke%3D%22%234B45A9%22%20stroke-width%3D%2215%22%20d%3D%22M88.5%2021l-43%2042.5%22%20stroke-linecap%3D%22square%22%2F%3E%3Cpath%20id%3D%22Triangle%22%20fill%3D%22%234B45A9%22%20d%3D%22M111.2%200v50L61%200z%22%2F%3E%3C%2Fg%3E%3Cpath%20id%3D%22square%22%20fill%3D%22%234B45A9%22%20d%3D%22M66%2015H0v94h94V44L79%2059v35H15V30h36z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");
      background-repeat: no-repeat;
      background-size: .75rem;
      content: "";
      display: inline-block;
      height: .75rem;
      margin-left: .25rem;
      width: .75rem;
    }
  
  
  /* Layout */
  
    [class*=layout-container] {
      margin: 0 auto;
      max-width: 71.25em;
      padding: 1.9em 1.3em;
      position: relative;
    }
    .layout-container--short {
      padding-top: 0;
      padding-bottom: 0;
      max-width: 48.75em;
    }
  
    .layout-container--short:after {
      display: block;
      content: "";
      clear: both;
    }
  
  /* Header */
  
    .header {
      padding-bottom: 1px;
    }
  
    .paths {
      margin-left: 8px;
    }
    .header-wrap {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 2em;
    }
    .project__header {
      background-color: #4b45a9;
      color: #fff;
      margin-bottom: -1px;
      padding-top: 1em;
      padding-bottom: 0.25em;
      border-bottom: 2px solid #BBB;
    }
  
    .project__header__title {
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-all;
      margin-bottom: .1em;
      margin-top: 0;
    }
  
    .timestamp {
      float: right;
      clear: none;
      margin-bottom: 0;
    }
  
    .meta-counts {
      clear: both;
      display: block;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 0 1.5em;
      color: #fff;
      clear: both;
      font-size: 1.1em;
    }
  
    .meta-count {
      display: block;
      flex-basis: 100%;
      margin: 0 1em 1em 0;
      float: left;
      padding-right: 1em;
      border-right: 2px solid #fff;
    }
  
    .meta-count:last-child {
      border-right: 0;
      padding-right: 0;
      margin-right: 0;
    }
  
  /* Card */
  
    .card {
      background-color: #fff;
      border: 1px solid #c5c5c5;
      border-radius: .25rem;
      margin: 0 0 2em 0;
      position: relative;
      min-height: 40px;
      padding: 1.5em;
    }
  
    .card .label {
      background-color: #767676;
      border: 2px solid #767676;
      color: white;
      padding: 0.25rem 0.75rem;
      font-size: 0.875rem;
      text-transform: uppercase;
      display: inline-block;
      margin: 0;
      border-radius: 0.25rem;
    }
  
    .card .label__text {
      vertical-align: text-top;
        font-weight: bold;
    }
  
    .card .label--critical {
      background-color: #AB1A1A;
      border-color: #AB1A1A;
    }
  
    .card .label--high {
      background-color: #CE5019;
      border-color: #CE5019;
    }
  
    .card .label--medium {
      background-color: #D68000;
      border-color: #D68000;
    }
  
    .card .label--low {
      background-color: #88879E;
      border-color: #88879E;
    }
  
    .severity--low {
      border-color: #88879E;
    }
  
    .severity--medium {
      border-color: #D68000;
    }
  
    .severity--high {
      border-color: #CE5019;
    }
  
    .severity--critical {
      border-color: #AB1A1A;
    }
  
    .card--vuln {
      padding-top: 4em;
    }
  
    .card--vuln .label {
      left: 0;
      position: absolute;
      top: 1.1em;
      padding-left: 1.9em;
      padding-right: 1.9em;
      border-radius: 0 0.25rem 0.25rem 0;
    }
  
    .card--vuln .card__section h2 {
      font-size: 22px;
      margin-bottom: 0.5em;
    }
  
    .card--vuln .card__section p {
      margin: 0 0 0.5em 0;
    }
  
    .card--vuln .card__meta {
      padding: 0 0 0 1em;
      margin: 0;
      font-size: 1.1em;
    }
  
    .card .card__meta__paths {
      font-size: 0.9em;
    }
  
    .card--vuln .card__title {
      font-size: 28px;
      margin-top: 0;
    }
  
    .card--vuln .card__cta p {
      margin: 0;
      text-align: right;
    }
  
    .source-panel {
      clear: both;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      padding: 0.5em 0;
      width: fit-content;
    }
  
  
  
  </style>
  <style type="text/css">
    .metatable {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      margin-top: 12px;
      border-collapse: collapse;
      border-spacing: 0;
      font-variant-numeric: tabular-nums;
      max-width: 51.75em;
    }
  
    tbody {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      display: flex;
      flex-wrap: wrap;
    }
  
    .meta-row {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      outline: none;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      display: flex;
      align-items: start;
      border-top: 1px solid #d3d3d9;
      padding: 8px 0 0 0;
      border-bottom: none;
      margin: 8px;
      width: 47.75%;
    }
  
    .meta-row-label {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      color: #4c4a73;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      margin: 0;
      outline: none;
      text-decoration: none;
      z-index: auto;
      align-self: start;
      flex: 1;
      font-size: 1rem;
      line-height: 1.5rem;
      padding: 0;
      text-align: left;
      vertical-align: top;
      text-transform: none;
      letter-spacing: 0;
    }
  
    .meta-row-value {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      word-break: break-word;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: right;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
    }
  </style>
</head>

<body class="section-projects">
  <main class="layout-stacked">
        <div class="layout-stacked__header header">
          <header class="project__header">
            <div class="layout-container">
              <a class="brand" href="https://snyk.io" title="Snyk">
                <svg width="68px" height="35px" viewBox="0 0 68 35" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img">
                  <title>Snyk - Open Source Security</title>
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g fill="#fff">
                      <path d="M5.732,27.278 C3.445,27.278 1.589,26.885 0,26.124 L0.483,22.472 C2.163,23.296 4.056,23.689 5.643,23.689 C6.801,23.689 7.563,23.295 7.563,22.599 C7.563,20.594 0.333,21.076 0.333,15.839 C0.333,12.491 3.407,10.729 7.259,10.729 C9.179,10.729 11.161,11.249 12.444,11.704 L11.924,15.294 C10.577,14.774 8.747,14.291 7.222,14.291 C6.282,14.291 5.518,14.621 5.518,15.231 C5.518,17.208 12.903,16.815 12.903,21.925 C12.903,25.325 9.877,27.277 5.733,27.277 L5.732,27.278 Z M25.726,26.936 L25.726,17.894 C25.726,15.827 24.811,14.85 23.069,14.85 C22.219,14.85 21.329,15.09 20.719,15.46 L20.719,26.936 L15.352,26.936 L15.352,11.262 L20.602,10.83 L20.474,13.392 L20.652,13.392 C21.784,11.87 23.702,10.716 25.992,10.716 C28.736,10.716 31.112,12.416 31.112,16.436 L31.112,26.936 L25.724,26.936 L25.726,26.936 Z M61.175,26.936 L56.879,19.479 L56.446,19.479 L56.446,26.935 L51.082,26.935 L51.082,8.37 L56.447,0 L56.447,17.323 C57.515,16.017 61.112,11.059 61.112,11.059 L67.732,11.059 L61.454,17.689 L67.949,26.95 L61.175,26.95 L61.175,26.938 L61.175,26.936 Z M44.13,11.11 L41.93,18.262 C41.5,19.606 41.08,22.079 41.08,22.079 C41.08,22.079 40.75,19.516 40.292,18.172 L37.94,11.108 L31.928,11.108 L38.462,26.935 C37.572,29.04 36.199,30.815 34.369,30.815 C34.039,30.815 33.709,30.802 33.389,30.765 L31.255,34.061 C31.928,34.441 33.212,34.835 34.737,34.835 C38.703,34.835 41.359,31.627 43.215,26.885 L49.443,11.108 L44.132,11.108 L44.13,11.11 Z"></path>
                    </g>
                  </g>
                </svg>
              </a>
              <div class="header-wrap">
                  <h1 class="project__header__title">Snyk test summary</h1>
    
                <p class="timestamp">TIMESTAMP</p>
              </div>
              <div class="source-panel">
                <span>Scanned the following paths:</span>
                <ul>
                  <li class="paths">./java-goof (maven)</li>
                  <li class="paths">./goof (npm)</li>
                </ul>
              </div>
    
              <div class="meta-counts">
                <div class="meta-count"><span>82</span> <span>known vulnerabilities</span></div>
                <div class="meta-count"><span>139 vulnerable dependency paths</span></div>
                <div class="meta-count"><span>492</span> <span>dependencies</span></div>
              </div><!-- .meta-counts -->
            </div><!-- .layout-container--short -->
          </header><!-- .project__header -->
        </div><!-- .layout-stacked__header -->

    <div class="layout-container" style="padding-top: 35px;">
      <div class="cards--vuln filter--patch filter--ignore">
        <div class="card card--vuln  disclosure--not-new severity--critical" data-snyk-test="critical">
            <h2 class="card__title">Arbitrary Code Execution</h2>
            <div class="card__section">
        
                <div class="label label--critical">
                    <span class="label__text">critical severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            commons-collections:commons-collections
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-common@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-CRITICAL-30078">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Prototype Override Protection Bypass</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            qs
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    goof@0.0.3, body-parser@1.9.0 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>qs</code> to version <code>6.4.0</code> or higher.
        <strong>Note:</strong> The fix was backported to the following versions <code>6.3.2</code>, <code>6.2.3</code>, <code>6.1.2</code>, <code>6.0.4</code>.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/ljharb/qs/commit/beade029171b8cef9cee0d03ebe577e2dd84976d">GitHub Commit</a></li>
        <li><a href="https://github.com/ljharb/qs/issues/200">Report of an insufficient fix</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:qs:20170213">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Arbitrary File Write via Archive Extraction (Zip Slip)</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.zeroturnaround:zt-zip
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>org.zeroturnaround:zt-zip</code> to version 1.13 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/zeroturnaround/zt-zip/commit/759b72f33bc8f4d69f84f09fcb7f010ad45d6fff">GitHub Commit</a></li>
        <li><a href="https://snyk.io/research/zip-slip-vulnerability">Zip Slip Advisory</a></li>
        <li><a href="https://github.com/snyk/zip-slip-vulnerability">List of fixed projects that contained Zip Slip</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGZEROTURNAROUND-31681">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">GPL-3.0 license</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Module:
        
                            org.jboss.logging:jboss-logging
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-common@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/snyk:lic:maven:org.jboss.logging:jboss-logging:GPL-3.0">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Insecure Defaults</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts:struts2-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30058">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Arbitrary Code Execution</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts:struts2-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>org.apache.struts:struts2-core</code> to version 2.3.32, 2.5.10.1 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/rapid7/metasploit-framework/pull/8072">Metasploit GitHub PR</a></li>
        <li><a href="https://github.com/rapid7/metasploit-framework/issues/8064">Metasploit GitHub Issue</a></li>
        <li><a href="https://github.com/rapid7/metasploit-framework/pull/8072/commits/fc0f63e77471baa40057effaaa8be0f205adc6b7">Metasploit GitHub Commit</a></li>
        <li><a href="https://github.com/tengzhangchao/Struts2_045-Poc">PoC</a></li>
        <li><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5638">CVE</a></li>
        <li><a href="https://www.exploit-db.com/exploits/41570/">Exploit DB</a></li>
        <li><a href="https://cwiki.apache.org/confluence/display/WW/S2-045">Struts Wiki</a></li>
        <li><a href="http://blog.talosintelligence.com/2017/03/apache-0-day-exploited.html">Talos Intelligence Blog</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30207">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Command Injection</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts:struts2-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30770">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Arbitrary Code Execution</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts:struts2-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>org.apache.struts:struts2-core</code> to version 2.3.20.2, 2.3.24.2, 2.3.28.1 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-3082">NVD</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30771">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Arbitrary Command Execution</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts:struts2-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30772">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Directory Traversal</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts:struts2-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30778">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Arbitrary Command Execution</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts:struts2-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Developers are strongly advised to upgrade their <em>Apache Struts</em> components to version <code>2.3.34</code>, <code>2.5.13</code> or higher.</p>
        <p>It is possible that some REST actions stop working because of applied default restrictions on available classes. In this case please investigate the new interfaces that were introduced to allow class restrictions per action, those interfaces are:</p>
        <ul>
        <li>org.apache.struts2.rest.handler.AllowedClasses</li>
        <li>org.apache.struts2.rest.handler.AllowedClassNames</li>
        <li>org.apache.struts2.rest.handler.XStreamPermissionProvider</li>
        </ul>
        <p>If for some reason upgrading is not an option, consider the following workarounds:</p>
        <ol>
        <li>Disable handling XML pages and requests to such pages</li>
        </ol>
        <pre><code class="language-xml">&lt;constant name=&quot;struts.action.extension&quot; value=&quot;xhtml,,json&quot; /&gt;
        </code></pre>
        <ol start="2">
        <li>Override getContentType in XStreamHandler</li>
        </ol>
        <pre><code class="language-java"> public class MyXStreamHandler extends XStreamHandler { 
           public String getContentType() {
             return &quot;not-existing-content-type-@;/&amp;%$#@&quot;;
           }
         }
        </code></pre>
        <ol start="3">
        <li>Register the handler by overriding the one provided by the framework in your struts.xml</li>
        </ol>
        <pre><code class="language-xml">&lt;bean type=&quot;org.apache.struts2.rest.handler.ContentTypeHandler&quot; name=&quot;myXStreamHandmer&quot; class=&quot;com.company.MyXStreamHandler&quot;/&gt;
        &lt;constant name=&quot;struts.rest.handlerOverride.xml&quot; value=&quot;myXStreamHandler&quot;/&gt;
        </code></pre>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://lgtm.com/blog/apache_struts_CVE-2017-9805_announcement">LGTM Advisory</a></li>
        <li><a href="https://lgtm.com/blog/apache_struts_CVE-2017-9805">LGTM Vulnerability Details</a></li>
        <li><a href="https://blogs.apache.org/foundation/entry/apache-struts-statement-on-equifax">Apache Struts Statement on Equifax Security Breach</a></li>
        <li><a href="https://cwiki.apache.org/confluence/display/WW/S2-052">Apache Security Bulletin</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-31495">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Denial of Service (DoS)</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts:struts2-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>org.apache.struts:struts2-core</code> to version 2.3.33, 2.5.12 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="http://struts.apache.org/docs/s2-049.html">Struts Security Bulletin</a></li>
        <li><a href="https://lists.apache.org/thread.html/3795c4dd46d9ec75f4a6eb9eca11c11edd3e796c6c1fd7b17b5dc50d@%3Cannouncements.struts.apache.org%3E">Struts Announcements Mailing List</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-31500">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Remote Code Execution</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts:struts2-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>org.apache.struts:struts2-core</code> to versions 2.3.35, 2.5.17 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://bugzilla.redhat.com/show_bug.cgi?id=1620019">RedHat Bugzilla Bug</a></li>
        <li><a href="https://cwiki.apache.org/confluence/display/WW/S2-057">Struts2 Security Bulletin</a></li>
        <li><a href="https://lgtm.com/blog/apache_struts_CVE-2018-11776">Lgtm Blog</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-32477">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Arbitrary Code Execution</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts.xwork:xwork-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30797">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Parameter Alteration</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts.xwork:xwork-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30798">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Improper Input Validation</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts.xwork:xwork-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30799">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Arbitrary Code Execution</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts.xwork:xwork-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30803">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Uninitialized Memory Exposure</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            npmconf
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
                                goof@0.0.3 and npmconf@0.0.24
        
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>npmconf</code> to version 2.1.3. 
        <strong>Note</strong> <code>npmconf</code> is deprecated and should not be used.
        <strong>Note</strong> This is vulnerable only for Node &lt;=4</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://hackerone.com/reports/320269">HAckerOne Report</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:npmconf:20180512">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            negotiator
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    goof@0.0.3, errorhandler@1.2.0 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>negotiator</code> to version <code>0.6.1</code> or greater.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS">https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS</a></li>
        <li><a href="https://github.com/jshttp/negotiator/commit/26a05ec15cf7d1fa56000d66ebe9c9a1a62cb75c">https://github.com/jshttp/negotiator/commit/26a05ec15cf7d1fa56000d66ebe9c9a1a62cb75c</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:negotiator:20160616">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            minimatch
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    goof@0.0.3, tap@5.8.0 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>minimatch</code> to version <code>3.0.2</code> or greater.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS">https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS</a></li>
        <li><a href="https://github.com/isaacs/minimatch/commit/6944abf9e0694bd22fd9dad293faa40c2bc8a955">https://github.com/isaacs/minimatch/commit/6944abf9e0694bd22fd9dad293faa40c2bc8a955</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:minimatch:20160620">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Content &amp; Code Injection (XSS)</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            marked
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
                                goof@0.0.3 and marked@0.3.5
        
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>marked</code> to version 0.3.6 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/chjj/marked/pull/592">GitHub PR</a></li>
        <li><a href="https://github.com/chjj/marked/pull/592/commits/2cff85979be8e7a026a9aca35542c470cf5da523">GitHub Commit</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:marked:20150520">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Cross-site Scripting (XSS) via Data URIs</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            marked
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
                                goof@0.0.3 and marked@0.3.5
        
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>marked</code> to version 0.3.7 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/chjj/marked/commit/cd2f6f5b7091154c5526e79b5f3bfb4d15995a51">GitHub Commit</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:marked:20170112">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Cross-site Scripting (XSS)</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            marked
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
                                goof@0.0.3 and marked@0.3.5
        
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>marked</code> to version 0.3.9 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/chjj/marked/issues/925">GitHub Issue</a></li>
        <li><a href="https://github.com/chjj/marked/pull/958">GitHub Issue - Release 0.3.9 status</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:marked:20170815">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            marked
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
                                goof@0.0.3 and marked@0.3.5
        
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>marked</code> to version 0.3.9 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/chjj/marked/issues/937">Github Issue</a></li>
        <li><a href="https://github.com/chjj/marked/pull/958">GitHub Issue - Release 0.3.9 status</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:marked:20170907">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            marked
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
                                goof@0.0.3 and marked@0.3.5
        
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade marked to version 0.3.17 or higher</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/markedjs/marked/pull/1083">GitHub PR</a></li>
        <li><a href="https://github.com/markedjs/marked/pull/1083">GitHub Commit</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:marked:20180225">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">XML External Entity (XXE) Injection</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            javax.servlet:jstl
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-common@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade to a version <code>1.3</code> or above. </p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-0254">NVD</a></li>
        <li><a href="https://access.redhat.com/security/cve/CVE-2015-0254">Redhat Security</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-JAVAXSERVLET-30449">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">GPL-2.0 license</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Module:
        
                            goof
                    </li>
        
                    <li class="card__meta__item">Introduced through:
                                <a href="/test//goof@0.0.3">
                                    goof@0.0.3
                                </a>
        
        
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/snyk:lic:npm:goof:GPL-2.0">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            fresh
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    goof@0.0.3, express@4.12.4 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>fresh</code> to version 0.5.2 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/jshttp/fresh/issues/24">Github Issue</a></li>
        <li><a href="https://github.com/jshttp/fresh/commit/21a0f0c2a5f447e0d40bc16be0c23fa98a7b46ec">Github Commit</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:fresh:20170908">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Arbitrary Code Execution</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            ejs
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
                                goof@0.0.3 and ejs@1.0.0
        
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>The vulnerability can be resolved by using the GitHub integration to <a href="https://snyk.io/org/projects">generate a pull-request</a> from your dashboard or ignored by running <code>snyk ignore</code> from the command-line interface.
        Otherwise, Upgrade <code>ejs</code> to version <code>2.5.3</code> or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://snyk.io/blog/fixing-ejs-rce-vuln">Snyk Blog</a></li>
        <li><a href="https://github.com/mde/ejs/commit/3d447c5a335844b25faec04b1132dbc721f9c8f6">Fix commit</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:ejs:20161128">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Code Injection</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            dustjs-linkedin
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
                                goof@0.0.3 and dustjs-linkedin@2.5.0
        
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade to version <code>2.6.0</code> or greater.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/linkedin/dustjs/pull/534/commits/884be3bb3a34a843e6fb411100088e9b02326bd4">https://github.com/linkedin/dustjs/pull/534/commits/884be3bb3a34a843e6fb411100088e9b02326bd4</a></li>
        <li><a href="https://github.com/linkedin/dustjs/pull/534">https://github.com/linkedin/dustjs/pull/534</a></li>
        <li><a href="https://github.com/linkedin/dustjs/issues/741">https://github.com/linkedin/dustjs/issues/741</a></li>
        <li><a href="https://artsploit.blogspot.co.il/2016/08/pprce2.html">https://artsploit.blogspot.co.il/2016/08/pprce2.html</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:dustjs-linkedin:20160819">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Denial of Service (DoS)</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            commons-fileupload:commons-fileupload
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>commons-fileupload:commons-fileupload</code> to version 1.3.2 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/apache/commons-fileupload/blob/b1498c9877d751f8bc4635a6f252ebdfcba28518/src/changes/changes.xml#L84">Github ChangeLog</a></li>
        <li><a href="https://bugzilla.redhat.com/show_bug.cgi?id=1349475">Redhat Bugzilla</a></li>
        <li><a href="http://mail-archives.us.apache.org/mod_mbox/www-announce/201606.mbox/%3C6223ece6-2b41-ef4f-22f9-d3481e492832@apache.org%3E">Apache Mailing Archives</a></li>
        <li><a href="http://svn.apache.org/viewvc/commons/proper/fileupload/trunk/RELEASE-NOTES.txt?r1=1745717&r2=1749637&diff_format=h">Apache-SVN</a></li>
        <li><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-3092">CVE</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-COMMONSFILEUPLOAD-30082">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Arbitrary Code Execution</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            commons-fileupload:commons-fileupload
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>commons-fileupload</code> to version 1.3.3 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-1000031">NVD</a></li>
        <li><a href="http://www.tenable.com/security/research/tra-2016-12">Tenable Security</a></li>
        <li><a href="https://github.com/apache/commons-fileupload/blob/master/src/changes/changes.xml#L65">Github ChangeLog</a></li>
        <li><a href="https://github.com/apache/commons-fileupload/commit/388e824518697c2c8f9f83fd964621d9c2f8fc4c">Github Commit</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-COMMONSFILEUPLOAD-30401">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Arbitrary Code Execution</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            commons-collections:commons-collections
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-core@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-COMMONSCOLLECTIONS-30078">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--high" data-snyk-test="high">
            <h2 class="card__title">Arbitrary File Write via Archive Extraction (Zip Slip)</h2>
            <div class="card__section">
        
                <div class="label label--high">
                    <span class="label__text">high severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            adm-zip
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
                                goof@0.0.3 and adm-zip@0.4.7
        
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>adm-zip</code> to version 0.4.11 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/cthackers/adm-zip/pull/212">GitHub PR</a></li>
        <li><a href="https://github.com/cthackers/adm-zip/pull/212/commits/6f4dfeb9a2166e93207443879988f97d88a37cde">GitHub Commit 0.4.9</a></li>
        <li><a href="https://github.com/cthackers/adm-zip/commit/d01fa8c80c3a5fcf5ce1eda82d96600c62910d3f">GitHub Commit 0.4.11</a></li>
        <li><a href="https://snyk.io/research/zip-slip-vulnerability">Zip Slip Advisory</a></li>
        <li><a href="https://github.com/snyk/zip-slip-vulnerability">List of fixed projects that contained Zip Slip</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:adm-zip:20180415">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Uninitialized Memory Exposure</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            tunnel-agent
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    goof@0.0.3, tap@5.8.0 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>tunnel-agent</code> to version 0.6.0 or higher.
        <strong>Note</strong> This is vulnerable only for Node &lt;=4</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://gist.github.com/ChALkeR/fd6b2c445834244e7d440a043f9d2ff4">PoC by ChALkeR</a></li>
        <li><a href="https://github.com/request/tunnel-agent/commit/9ca95ec7219daface8a6fc2674000653de0922c0">Github Commit</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:tunnel-agent:20170305">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">MPL-2.0 license</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Module:
        
                            symbol
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    goof@0.0.3, tap@5.8.0 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/snyk:lic:npm:symbol:MPL-2.0">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Directory Traversal</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            st
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
                                goof@0.0.3 and st@0.2.4
        
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade to version 0.2.5 or greater.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/isaacs/st#security-status">https://github.com/isaacs/st#security-status</a></li>
        <li><a href="http://blog.npmjs.org/post/80277229932/newly-paranoid-maintainers">http://blog.npmjs.org/post/80277229932/newly-paranoid-maintainers</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:st:20140206">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Open Redirect</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            st
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
                                goof@0.0.3 and st@0.2.4
        
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:st:20171013">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            semver
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    goof@0.0.3, npmconf@0.0.24 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Update to a version 4.3.2 or greater. From the issue description [2]: &quot;Package version can no longer be more than 256 characters long. This prevents a situation in which parsing the version number can use exponentially more time and memory to parse, leading to a potential denial of service.&quot;</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/npm/npm/releases/tag/v2.7.5">GitHub Release</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:semver:20150403">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Remote Memory Exposure</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            request
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    goof@0.0.3, tap@5.8.0 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>request</code> to version 2.68.0 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/request/request/pull/2018">GitHub PR</a></li>
        <li><a href="https://github.com/ChALkeR/notes/blob/master/Lets-fix-Buffer-API.md#previous-materials">Blog: Node Buffer API fix</a></li>
        <li><a href="https://github.com/ChALkeR/notes/blob/master/Buffer-knows-everything.md">Blog: Information about Buffer</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:request:20160119">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Denial of Service (DoS)</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.springframework:spring-web
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>org.springframework:spring-web</code> to version 3.2.14, 4.1.7 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="http://pivotal.io/security/cve-2015-3192">Pivotal Security</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-30164">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Reflected File Download</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.springframework:spring-web
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>org.springframework:spring-web</code> to version 4.2.1.RELEASE, 4.1.7.RELEASE, 4.0.9.RELEASE, 3.2.14.RELEASE or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="http://pivotal.io/security/cve-2015-5211">Pivotal Security</a></li>
        <li><a href="https://access.redhat.com/security/cve/cve-2015-5211">Redhat Bugzilla</a></li>
        <li><a href="https://www.trustwave.com/Resources/SpiderLabs-Blog/Reflected-File-Download---A-New-Web-Attack-Vector/">Oren Hafif Blog</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-30165">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Cross-site Request Forgery (CSRF)</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.springframework:spring-web
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-31331">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Authentication Bypass</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.springframework:spring-web
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no fix version for <code>org.springframework:spring-web</code>.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/spring-projects/spring-security/issues/3392">GitHub Issue</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-31644">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Directory Traversal</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.springframework:spring-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-core@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>org.springframework:spring-core</code> to version 3.2.9, 4.0.5 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/spring-projects/spring-framework/commit/e3e71ba92a8b82dadf474eda76cd2741f65a77a8">GitHub Commit</a></li>
        <li><a href="https://pivotal.io/security/cve-2014-3578">Pivotal Security</a></li>
        <li><a href="https://jira.spring.io/browse/SPR-12354">Jira Issue</a></li>
        <li><a href="http://jvndb.jvn.jp/en/contents/2014/JVNDB-2014-000054.html">JVNDB</a></li>
        <li><a href="https://bugzilla.redhat.com/show_bug.cgi?id=1131882">Redhat Bugzilla</a></li>
        <li><a href="https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3578">NVD</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-31325">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">JSM bypass via ReflectionHelper</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.hibernate:hibernate-validator
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-common@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGHIBERNATE-30098">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Dual license: EPL-1.0, EPL-1.0</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Module:
        
                            org.hibernate.javax.persistence:hibernate-jpa-2.1-api
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-core@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/snyk:lic:maven:org.hibernate.javax.persistence:hibernate-jpa-2.1-api:(EPL-1.0_OR_EPL-1.0)">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">EPL-1.0 license</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Module:
        
                            org.aspectj:aspectjweaver
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-core@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/snyk:lic:maven:org.aspectj:aspectjweaver:EPL-1.0">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Cross-site Scripting (XSS)</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts:struts2-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30773">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Cross-site Request Forgery (CSRF)</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts:struts2-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30774">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Access Restriction Bypass</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts:struts2-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30775">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Access Restriction Bypass</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts:struts2-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30776">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Denial of Service (DoS)</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts:struts2-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30777">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Denial of Service (DoS)</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts:struts2-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>org.apache.struts:struts2-core</code> to version 2.3.34, 2.5.13 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="http://struts.apache.org/docs/s2-050.html">Struts Security Bulletin</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-31501">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Denial of Service (DoS)</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts:struts2-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>org.apache.struts:struts2-core</code> to version 2.3.34, 2.5.13 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="http://struts.apache.org/docs/s2-051.html">Struts Security Bulletin</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-31502">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Arbitrary Code Execution</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts:struts2-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Developers are strongly advised to upgrade their <em>Apache Struts</em> components to version <code>2.3.34</code>, <code>2.5.12</code> or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://cwiki.apache.org/confluence/display/WW/S2-053">Apache Security Bulletin</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-31503">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Cross-site Scripting (XSS)</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts.xwork:xwork-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30800">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Improper Input Validation</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts.xwork:xwork-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30801">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Improper Input Validation</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts.xwork:xwork-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30802">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Improper Input Validation</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts.xwork:xwork-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30804">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Denial of Service (DoS)</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            ognl:ognl
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>ognl:ognl</code> to version 3.0.12 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-3093">NVD</a></li>
        <li><a href="https://github.com/jkuhnert/ognl/commit/ae43073fbf38db8371ff4f8bf2a966ee3b5f7e92">GitHub Commit</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-OGNL-30474">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            ms
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    goof@0.0.3, humanize-ms@1.0.1 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>ms</code> to version 0.7.1.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS">OWASP - ReDoS</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:ms:20151024">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Remote Memory Exposure</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            mongoose
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
                                goof@0.0.3 and mongoose@4.2.4
        
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>mongoose</code> to version &gt;= 3.8.39 or &gt;= 4.3.6.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/Automattic/mongoose/issues/3764">GitHub Issue</a></li>
        <li><a href="https://github.com/ChALkeR/notes/blob/master/Lets-fix-Buffer-API.md#previous-materials">Blog: Node Buffer API fix</a></li>
        <li><a href="https://github.com/ChALkeR/notes/blob/master/Buffer-knows-everything.md">Blog: Information about Buffer</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:mongoose:20160116">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            moment
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
                                goof@0.0.3 and moment@2.15.1
        
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:moment:20161019">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Cross-site Scripting (XSS)</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            marked
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
                                goof@0.0.3 and marked@0.3.5
        
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>marked</code> to version 0.3.9 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/chjj/marked/issues/926">GitHub Issue</a></li>
        <li><a href="https://github.com/chjj/marked/pull/958">GitHub Issue - Release 0.3.9 status</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:marked:20170815-1">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Cross-site Scripting (XSS)</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            jquery
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
                                goof@0.0.3 and jquery@2.2.4
        
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>jquery</code> to version <code>3.0.0</code> or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/jquery/jquery/issues/2432">GitHub Issue</a></li>
        <li><a href="https://github.com/jquery/jquery/pull/2588">GitHub PR</a></li>
        <li><a href="https://github.com/jquery/jquery/pull/2588/commits/c254d308a7d3f1eac4d0b42837804cfffcba4bb2">GitHub Commit 3.0.0</a></li>
        <li><a href="https://github.com/jquery/jquery/commit/f60729f3903d17917dc351f3ac87794de379b0cc">GitHub Commit 1.12</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:jquery:20150627">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Timing Attack</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            http-signature
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    goof@0.0.3, tap@5.8.0 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>http-signature</code> to version 1.0.0 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/joyent/node-http-signature/pull/36">Github PR</a></li>
        <li><a href="https://github.com/joyent/node-http-signature/commit/78ab1da232f31f695f5c362d863593a143aa8b56">Github Commit</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:http-signature:20150122">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Cross-site Scripting (XSS)</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            ejs
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
                                goof@0.0.3 and ejs@1.0.0
        
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>The vulnerability can be resolved by using the GitHub integration to <a href="https://snyk.io/org/projects">generate a pull-request</a> from your dashboard or ignored by running <code>snyk ignore</code> from the command-line interface.
        Otherwise, Upgrade <code>ejs</code> to version <code>2.5.5</code> or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://snyk.io/blog/fixing-ejs-rce-vuln">Snyk Blog</a></li>
        <li><a href="https://github.com/mde/ejs/commit/49264e0037e313a0a3e033450b5c184112516d8f">Fix commit</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:ejs:20161130">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Denial of Service (DoS)</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            ejs
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
                                goof@0.0.3 and ejs@1.0.0
        
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>The vulnerability can be resolved by using the GitHub integration to <a href="https://snyk.io/org/projects">generate a pull-request</a> from your dashboard or ignored by running <code>snyk ignore</code> from the command-line interface.
        Otherwise, Upgrade <code>ejs</code> to version <code>2.5.5</code> or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://snyk.io/blog/fixing-ejs-rce-vuln">Snyk Blog</a></li>
        <li><a href="https://github.com/mde/ejs/commit/49264e0037e313a0a3e033450b5c184112516d8f">Fix commit</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:ejs:20161130-1">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Insecure Randomness</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            cryptiles
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    goof@0.0.3, tap@5.8.0 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade to version 4.1.2 and higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/hapijs/cryptiles/issues/34">GitHub Issue</a></li>
        <li><a href="https://github.com/hapijs/cryptiles/commit/9332d4263a32b84e76bf538d7470d01ea63fa047">GitHub Commit</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:cryptiles:20180710">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Information Disclosure</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            commons-fileupload:commons-fileupload
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>commons-fileupload</code> to version 1.3.2 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/apache/commons-fileupload/blob/master/src/changes/changes.xml#L56">Github ChangeLog</a></li>
        <li><a href="https://github.com/apache/commons-fileupload/commit/5b4881d7f75f439326f54fa554a9ca7de6d60814">Github Commit</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-COMMONSFILEUPLOAD-31540">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            brace-expansion
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    goof@0.0.3, tap@5.8.0 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>brace-expansion</code> to version 1.1.7 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/juliangruber/brace-expansion/pull/35">GitHub PR</a></li>
        <li><a href="https://github.com/juliangruber/brace-expansion/issues/33">GitHub Issue</a></li>
        <li><a href="https://github.com/juliangruber/brace-expansion/pull/35/commits/b13381281cead487cbdbfd6a69fb097ea5e456c3">GitHub Commit</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:brace-expansion:20170302">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
            <h2 class="card__title">XML External Entity (XXE) Injection</h2>
            <div class="card__section">
        
                <div class="label label--low">
                    <span class="label__text">low severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.springframework:spring-web
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>org.springframework:spring-web</code> to versions 3.2.8, 4.0.4 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="http://www.gopivotal.com/security/cve-2014-0225">Pivotal Security</a></li>
        <li><a href="https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2014-0225">Redhat Bugzilla</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-30163">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
            <h2 class="card__title">Manipulation of Struts&#x27; internals</h2>
            <div class="card__section">
        
                <div class="label label--low">
                    <span class="label__text">low severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: maven
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            org.apache.struts:struts2-core
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30060">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
            <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
            <div class="card__section">
        
                <div class="label label--low">
                    <span class="label__text">low severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            ms
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    goof@0.0.3, mongoose@4.2.4 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>ms</code> to version 2.0.0 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/zeit/ms/pull/89">GitHub PR</a></li>
        <li><a href="https://github.com/zeit/ms/pull/89/commits/305f2ddcd4eff7cc7c518aca6bb2b2d2daad8fef">GitHub Commit</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:ms:20170412">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
            <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
            <div class="card__section">
        
                <div class="label label--low">
                    <span class="label__text">low severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            moment
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
                                goof@0.0.3 and moment@2.15.1
        
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>moment</code> to version <code>2.19.3</code> or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/moment/moment/issues/4163">GitHub Issue</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:moment:20170905">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
            <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
            <div class="card__section">
        
                <div class="label label--low">
                    <span class="label__text">low severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            mime
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    goof@0.0.3, express@4.12.4 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>mime</code> to versions 1.4.1, 2.0.3 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/broofa/node-mime/issues/167">Github Issue</a></li>
        <li><a href="https://github.com/broofa/node-mime/commit/855d0c4b8b22e4a80b9401a81f2872058eae274d">Github Commit 1.x</a></li>
        <li><a href="https://github.com/broofa/node-mime/commit/1df903fdeb9ae7eaa048795b8d580ce2c98f40b0">Github Commit 2.0.x</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:mime:20170907">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
            <h2 class="card__title">Prototype Pollution</h2>
            <div class="card__section">
        
                <div class="label label--low">
                    <span class="label__text">low severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            hoek
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    goof@0.0.3, tap@5.8.0 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>hoek</code> to versions 4.2.1, 5.0.3 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://hackerone.com/reports/310439">HackerOne Report</a></li>
        <li><a href="https://github.com/hapijs/hoek/pull/227">GitHub PR</a></li>
        <li><a href="https://github.com/hapijs/hoek/issues/230">GitHub Issue - 4.2.1 Backport</a></li>
        <li><a href="https://github.com/hapijs/hoek/commit/32ed5c9413321fbc37da5ca81a7cbab693786dee">GitHub Commit 5.0.3</a></li>
        <li><a href="https://github.com/hapijs/hoek/commit/5aed1a8c4a3d55722d1c799f2368857bf418d6df">GitHub Commit 4.2.x</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:hoek:20180212">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
            <h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>
            <div class="card__section">
        
                <div class="label label--low">
                    <span class="label__text">low severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            hawk
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    goof@0.0.3, tap@5.8.0 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no remediation at the moment</p>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:hawk:20160119">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
            <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
            <div class="card__section">
        
                <div class="label label--low">
                    <span class="label__text">low severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            debug
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    goof@0.0.3, express@4.12.4 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>debug</code> to version 2.6.9, 3.1.0 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/visionmedia/debug/issues/501">GitHub Issue</a></li>
        <li><a href="https://github.com/visionmedia/debug/pull/504">GitHub PR</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:debug:20170905">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
            <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
            <div class="card__section">
        
                <div class="label label--low">
                    <span class="label__text">low severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            bson
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    goof@0.0.3, mongoose@4.2.4 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>bson</code> to version 1.0.5 or higher</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/mongodb/js-bson/commit/bd61c45157c53a1698ff23770160cf4783e9ea4a">GitHub Commit</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:bson:20180225">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
            <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
            <div class="card__section">
        
                <div class="label label--low">
                    <span class="label__text">low severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            braces
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    goof@0.0.3, tap@5.8.0 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>braces</code> to version 2.3.1 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/micromatch/braces/commit/abdafb0cae1e0c00f184abbadc692f4eaa98f451">GitHub Commit</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:braces:20180219">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
      </div><!-- cards -->
    </div>
  </main><!-- .layout-stacked__content -->
</body>

</html>

`

exports[`test/snyk-to-html.test.ts TAP test snyk-to-html handles -a argument correctly > should be expected snapshot containing actionable remediations 1`] = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Language" content="en-us">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Snyk test report</title>
  <meta name="description" content="5 known vulnerabilities found in 8 vulnerable dependency paths.">
  <base target="_blank">
  <link rel="icon" type="image/png" href="https://res.cloudinary.com/snyk/image/upload/v1468845142/favicon/favicon.png"
    sizes="194x194">
  <link rel="shortcut icon" href="https://res.cloudinary.com/snyk/image/upload/v1468845142/favicon/favicon.ico">
  <style type="text/css">
  
    body {
      -moz-font-feature-settings: "pnum";
      -webkit-font-feature-settings: "pnum";
      font-variant-numeric: proportional-nums;
      display: flex;
      flex-direction: column;
      font-feature-settings: "pnum";
      font-size: 100%;
      line-height: 1.5;
      min-height: 100vh;
      -webkit-text-size-adjust: 100%;
      margin: 0;
      padding: 0;
      background-color: #F5F5F5;
      font-family: 'Arial', 'Helvetica', Calibri, sans-serif;
    }
  
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 500;
    }
  
    a,
    a:link,
    a:visited {
      border-bottom: 1px solid #4b45a9;
      text-decoration: none;
      color: #4b45a9;
    }
  
    a:hover,
    a:focus,
    a:active {
      border-bottom: 1px solid #4b45a9;
    }
  
    hr {
      border: none;
      margin: 1em 0;
      border-top: 1px solid #c5c5c5;
    }
  
    ul {
      padding: 0 1em;
      margin: 1em 0;
    }
  
    code {
      background-color: #EEE;
      color: #333;
      padding: 0.25em 0.5em;
      border-radius: 0.25em;
    }
  
    pre {
      background-color: #333;
      font-family: monospace;
      padding: 0.5em 1em 0.75em;
      border-radius: 0.25em;
      font-size: 14px;
    }
  
    pre code {
      padding: 0;
      background-color: transparent;
      color: #fff;
    }
  
    a code {
      border-radius: .125rem .125rem 0 0;
      padding-bottom: 0;
      color: #4b45a9;
    }
  
    a[href^="http://"]:after,
    a[href^="https://"]:after {
      background-image: linear-gradient(transparent,transparent),url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20112%20109%22%3E%3Cg%20id%3D%22Page-1%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22link-external%22%3E%3Cg%20id%3D%22arrow%22%3E%3Cpath%20id%3D%22Line%22%20stroke%3D%22%234B45A9%22%20stroke-width%3D%2215%22%20d%3D%22M88.5%2021l-43%2042.5%22%20stroke-linecap%3D%22square%22%2F%3E%3Cpath%20id%3D%22Triangle%22%20fill%3D%22%234B45A9%22%20d%3D%22M111.2%200v50L61%200z%22%2F%3E%3C%2Fg%3E%3Cpath%20id%3D%22square%22%20fill%3D%22%234B45A9%22%20d%3D%22M66%2015H0v94h94V44L79%2059v35H15V30h36z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");
      background-repeat: no-repeat;
      background-size: .75rem;
      content: "";
      display: inline-block;
      height: .75rem;
      margin-left: .25rem;
      width: .75rem;
    }
  
  
  /* Layout */
  
    [class*=layout-container] {
      margin: 0 auto;
      max-width: 71.25em;
      padding: 1.9em 1.3em;
      position: relative;
    }
    .layout-container--short {
      padding-top: 0;
      padding-bottom: 0;
      max-width: 48.75em;
    }
  
    .layout-container--short:after {
      display: block;
      content: "";
      clear: both;
    }
  
  /* Header */
  
    .header {
      padding-bottom: 1px;
    }
  
    .paths {
      margin-left: 8px;
    }
    .header-wrap {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 2em;
    }
    .project__header {
      background-color: #4b45a9;
      color: #fff;
      margin-bottom: -1px;
      padding-top: 1em;
      padding-bottom: 0.25em;
      border-bottom: 2px solid #BBB;
    }
  
    .project__header__title {
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-all;
      margin-bottom: .1em;
      margin-top: 0;
    }
  
    .timestamp {
      float: right;
      clear: none;
      margin-bottom: 0;
    }
  
    .meta-counts {
      clear: both;
      display: block;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 0 1.5em;
      color: #fff;
      clear: both;
      font-size: 1.1em;
    }
  
    .meta-count {
      display: block;
      flex-basis: 100%;
      margin: 0 1em 1em 0;
      float: left;
      padding-right: 1em;
      border-right: 2px solid #fff;
    }
  
    .meta-count:last-child {
      border-right: 0;
      padding-right: 0;
      margin-right: 0;
    }
  
  /* Card */
  
    .card {
      background-color: #fff;
      border: 1px solid #c5c5c5;
      border-radius: .25rem;
      margin: 0 0 2em 0;
      position: relative;
      min-height: 40px;
      padding: 1.5em;
    }
  
    .card .label {
      background-color: #767676;
      border: 2px solid #767676;
      color: white;
      padding: 0.25rem 0.75rem;
      font-size: 0.875rem;
      text-transform: uppercase;
      display: inline-block;
      margin: 0;
      border-radius: 0.25rem;
    }
  
    .card .label__text {
      vertical-align: text-top;
        font-weight: bold;
    }
  
    .card .label--critical {
      background-color: #AB1A1A;
      border-color: #AB1A1A;
    }
  
    .card .label--high {
      background-color: #CE5019;
      border-color: #CE5019;
    }
  
    .card .label--medium {
      background-color: #D68000;
      border-color: #D68000;
    }
  
    .card .label--low {
      background-color: #88879E;
      border-color: #88879E;
    }
  
    .severity--low {
      border-color: #88879E;
    }
  
    .severity--medium {
      border-color: #D68000;
    }
  
    .severity--high {
      border-color: #CE5019;
    }
  
    .severity--critical {
      border-color: #AB1A1A;
    }
  
    .card--vuln {
      padding-top: 4em;
    }
  
    .card--vuln .label {
      left: 0;
      position: absolute;
      top: 1.1em;
      padding-left: 1.9em;
      padding-right: 1.9em;
      border-radius: 0 0.25rem 0.25rem 0;
    }
  
    .card--vuln .card__section h2 {
      font-size: 22px;
      margin-bottom: 0.5em;
    }
  
    .card--vuln .card__section p {
      margin: 0 0 0.5em 0;
    }
  
    .card--vuln .card__meta {
      padding: 0 0 0 1em;
      margin: 0;
      font-size: 1.1em;
    }
  
    .card .card__meta__paths {
      font-size: 0.9em;
    }
  
    .card--vuln .card__title {
      font-size: 28px;
      margin-top: 0;
    }
  
    .card--vuln .card__cta p {
      margin: 0;
      text-align: right;
    }
  
    .source-panel {
      clear: both;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      padding: 0.5em 0;
      width: fit-content;
    }
  
  
  
  </style>
  <style type="text/css">
    .remediation-card {
      background-color: #edecf6;
      border-radius: 2px;
      padding: 1px;
      box-shadow: inset 0 0 0 1px #938fc7, 0 0 0 2px transparent;
      border-radius: 2px;
    }
    .remediation-card__header {
      align-items: center;
      background-color: #fff;
      border-radius: 4px 4px 0 0;
      display: flex;
      justify-content: space-between;
      position: relative;
    }
    .remediation-card__body {
      background-color: #edecf6;
      border-top-color: #938fc7;
      padding: 0;
      border-top: 1px solid #d3d3d9;
      position: relative;
    }
    .remediation-card__layout-container {
      max-width: 1440px;
      margin-left: auto;
      margin-right: auto;
      padding: 0 20px;
    }
    .remediation-card__pane.shown {
      background-color: #fff;
      border-top: 1px solid #d3d3d9;
      padding: 32px 0;
      display: block;
      visibility: visible;
      height: auto;
    }
    .remediation-card__pane {
      display: none;
      visibility: hidden;
      height: 0;
    }
    .remediation-card__nav {
      position: relative;
      top: 1px;
    }
    .remediation-card__nav-list {
      display: flex;
      margin: 0 0;
      padding: 0 0;
    }
    .remediation-card__nav-item {
      white-space: nowrap;
      list-style-type: none;
      color: #4b45a1;
      margin: 0;
    }
    .remediation-card__nav-item.active {
      background-color: #fff;
      white-space: nowrap;
      list-style-type: none;
      color: #4b45a1;
      margin: 0;
    }
    .remediation-card__nav-link {
      color: #727184;
      border: 1px solid transparent;
      border-top-width: 3px;
      border-bottom-color: #d3d3d9;
      display: inline-block;
      height: 44px;
      padding: 12px 16px 12px;
      cursor: pointer;
      font-size: 1rem;
      outline: none;
    }
    .remediation-card__nav-item.active > .remediation-card__nav-link {
      color: #393842;
      border: 1px solid #d3d3d9;
      border-bottom: none;
      border-top: 3px solid #D68000;
      border-radius: .25rem .25rem 0 0;
      display: inline-block;
      height: 44px;
      padding: 12px 16px 12px;
      cursor: pointer;
      font-size: 1rem;
      outline: none;
    }
    .remediation-card__block {
      background-color: #fff;
      box-shadow: inset 0 0 0 1px hsl(244, 8%, 84%);
      border-radius: 2px;
      padding: 1px;
      margin-top: 12px;
    }
    .remediation-card__expandable-container {
      cursor: pointer;
      align-items: stretch;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
    }
    .remediation-card__expandable-wrapper >  .remediation-card__expand {
      visibility: hidden;
      height: 0;
      display: none;
    }
  
    .remediation-card__expandable-wrapper.shown > .remediation-card__expand {
      visibility: visible;
      height: auto;
      display: block;
    }
  
    .remediation-card__expandable-title {
      align-items: center;
      display: flex;
      font-size: 1rem;
      padding: 12px;
      position: relative;
      width: 100%;
    }
    .remediation-card__chevron {
      display: inline-block;
      margin-right: 8px;
      transition: transform .2s ease-in-out;
      position: relative;
    }
    .remediation-card__expandable-wrapper svg {
      transform: rotate(-90deg);
    }
    .remediation-card__expandable-wrapper.shown svg {
      transform: initial;
    }
    .remediation-card__chevron .block-expandable__chevron {
      width: 20px;
      height: 20px;
    }
    .remediation-card__chevron .scoped {
      display: inline-block;
      fill: currentColor;
      overflow: hidden;
      vertical-align: middle;
    }
    .remediation-card__severity {
      margin-right: 8px;
      font-size: .75rem;
      line-height: 1.35;
    }
    .remediation-card__severity-text {
      padding: 0;
      text-align: center;
      width: 26px;
      color: white;
      margin-right: 8px;
      font-size: .75rem;
    }
    .remediation-card__severity-label {
      position: relative;
      top: 1px;
    }
  
    .remediation-card__severity--critical {
      background-color: #ab1a1a;
      border-color: #ab1a1a;
    }
    .remediation-card__severity--high {
      background-color: #CE5019;
      border-color: #CE5019;
    }
    .remediation-card__severity--medium {
      background-color: #D68000;
      border-color: #D68000;
    }
    .remediation-card__severity--low {
      background-color: #88879E;
      border-color: #88879E;
    }
    .remediation-card__h2 {
      color: #393842;
      display: block;
      padding: 16px 24px 12px;
      width: 100%;
    }
    .remediation-card__item {
      padding-left: 0;
      padding-right: 0;
      list-style: none;
    }
    .remediation-card__vuln {
      align-items: center;
      border-top: 1px solid #b3b2bd;
      display: flex;
      padding: 12px;
    }
  </style>
  <style type="text/css">
    .metatable {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      margin-top: 12px;
      border-collapse: collapse;
      border-spacing: 0;
      font-variant-numeric: tabular-nums;
      max-width: 51.75em;
    }
  
    tbody {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      display: flex;
      flex-wrap: wrap;
    }
  
    .meta-row {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      outline: none;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      display: flex;
      align-items: start;
      border-top: 1px solid #d3d3d9;
      padding: 8px 0 0 0;
      border-bottom: none;
      margin: 8px;
      width: 47.75%;
    }
  
    .meta-row-label {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      color: #4c4a73;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      margin: 0;
      outline: none;
      text-decoration: none;
      z-index: auto;
      align-self: start;
      flex: 1;
      font-size: 1rem;
      line-height: 1.5rem;
      padding: 0;
      text-align: left;
      vertical-align: top;
      text-transform: none;
      letter-spacing: 0;
    }
  
    .meta-row-value {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      word-break: break-word;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: right;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
    }
  </style>
</head>

<body class="test-remediation-section-projects">
  <main class="layout-stacked">
        <div class="layout-stacked__header header">
          <header class="project__header">
            <div class="layout-container">
              <a class="brand" href="https://snyk.io" title="Snyk">
                <svg width="68px" height="35px" viewBox="0 0 68 35" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img">
                  <title>Snyk - Open Source Security</title>
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g fill="#fff">
                      <path d="M5.732,27.278 C3.445,27.278 1.589,26.885 0,26.124 L0.483,22.472 C2.163,23.296 4.056,23.689 5.643,23.689 C6.801,23.689 7.563,23.295 7.563,22.599 C7.563,20.594 0.333,21.076 0.333,15.839 C0.333,12.491 3.407,10.729 7.259,10.729 C9.179,10.729 11.161,11.249 12.444,11.704 L11.924,15.294 C10.577,14.774 8.747,14.291 7.222,14.291 C6.282,14.291 5.518,14.621 5.518,15.231 C5.518,17.208 12.903,16.815 12.903,21.925 C12.903,25.325 9.877,27.277 5.733,27.277 L5.732,27.278 Z M25.726,26.936 L25.726,17.894 C25.726,15.827 24.811,14.85 23.069,14.85 C22.219,14.85 21.329,15.09 20.719,15.46 L20.719,26.936 L15.352,26.936 L15.352,11.262 L20.602,10.83 L20.474,13.392 L20.652,13.392 C21.784,11.87 23.702,10.716 25.992,10.716 C28.736,10.716 31.112,12.416 31.112,16.436 L31.112,26.936 L25.724,26.936 L25.726,26.936 Z M61.175,26.936 L56.879,19.479 L56.446,19.479 L56.446,26.935 L51.082,26.935 L51.082,8.37 L56.447,0 L56.447,17.323 C57.515,16.017 61.112,11.059 61.112,11.059 L67.732,11.059 L61.454,17.689 L67.949,26.95 L61.175,26.95 L61.175,26.938 L61.175,26.936 Z M44.13,11.11 L41.93,18.262 C41.5,19.606 41.08,22.079 41.08,22.079 C41.08,22.079 40.75,19.516 40.292,18.172 L37.94,11.108 L31.928,11.108 L38.462,26.935 C37.572,29.04 36.199,30.815 34.369,30.815 C34.039,30.815 33.709,30.802 33.389,30.765 L31.255,34.061 C31.928,34.441 33.212,34.835 34.737,34.835 C38.703,34.835 41.359,31.627 43.215,26.885 L49.443,11.108 L44.132,11.108 L44.13,11.11 Z"></path>
                    </g>
                  </g>
                </svg>
              </a>
              <div class="header-wrap">
                  <h1 class="project__header__title">Snyk test report</h1>
    
                <p class="timestamp">TIMESTAMP</p>
              </div>
              <div class="source-panel">
                <span>Scanned the following path:</span>
                <ul>
                  <li class="paths">/path/to/npm-lockfile-with-vulns/package-lock.json (npm)</li>
                </ul>
              </div>
    
              <div class="meta-counts">
                <div class="meta-count"><span>5</span> <span>known vulnerabilities</span></div>
                <div class="meta-count"><span>8 vulnerable dependency paths</span></div>
                <div class="meta-count"><span>135</span> <span>dependencies</span></div>
              </div><!-- .meta-counts -->
            </div><!-- .layout-container--short -->
          </header><!-- .project__header -->
        </div><!-- .layout-stacked__header -->
      <section class="layout-container">
          <table class="metatable">
              <tbody>
              <tr class="meta-row"><th class="meta-row-label">Project</th> <td class="meta-row-value">npm-two-vuln-deps</td></tr>
              <tr class="meta-row"><th class="meta-row-label">Path</th> <td class="meta-row-value">/path/to/npm-lockfile-with-vulns</td></tr>
              <tr class="meta-row"><th class="meta-row-label">Package Manager</th> <td class="meta-row-value">npm</td></tr>
              <tr class="meta-row"><th class="meta-row-label">Manifest</th> <td class="meta-row-value">package-lock.json</td></tr>
              </tbody>
          </table>
      </section>
      <section class="layout-container">
        <div class='remediation-card'>
          <header class="remediation-card__header">
            <span class="remediation-card__h2"><h2>Remediation advice</h2></span>
          </header>
          <div class='remediation-card__body'>
            <!---maybe a wrapper div-->
            <div class='remediation-card__layout-container'>
              <nav class="remediation-card__nav">
                <ul class="remediation-card__nav-list">
                  <li class="remediation-card__nav-item js-nav" data-toggle="upgrades"><span class="remediation-card__nav-link">Upgradable Issues (1)</span></li>
                  <li class="remediation-card__nav-item js-nav" data-toggle="patches"><span class="remediation-card__nav-link">Patchable Issues (1)</span></li>
                </ul>
              </nav>
            </div>
              <div class='remediation-card__pane shown' data-pane="upgrades">
                <div class='remediation-card__layout-container'>
                      <div class='remediation-card__block'>
                        <div class='remediation-card__expandable-wrapper shown'>
                            <div class='remediation-card__expandable-container js-remediation' >
                              <div class='remediation-card__expandable-title'>
                                <span class='remediation-card__chevron' aria-label="Chevron Down icon" role="img">
                                  <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                                    class="block-expandable__chevron">
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                                      <title>Chevron Down icon</title>
                                    </path>
                                  </svg>
                                </span>
                                <span class='remediation-card__text'>
                                  Upgrade <strong> twilio@2.11.1 </strong> to <strong> twilio@3.9.0 </strong>
                                </span>
                              </div>
                            </div>
                            <div class='remediation-card__expand'>
                                <!--each vuln for the upgrade -->
                                <ul>
                                    <li class='remediation-card__item'>
                                      <div class='remediation-card__vuln'>
                                        <abbr title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></abbr>
                                        <a href="https://snyk.io/vuln/npm:hoek:20180212">
                                          Prototype Pollution
                                        </a>
                                      </div>
                                    </li>
                                    <li class='remediation-card__item'>
                                      <div class='remediation-card__vuln'>
                                        <abbr title="low severity issues" class="remediation-card__severity-text remediation-card__severity--low"><span class="remediation-card__label">L</span></abbr>
                                        <a href="https://snyk.io/vuln/npm:ms:20170412">
                                          Regular Expression Denial of Service (ReDoS)
                                        </a>
                                      </div>
                                    </li>
                                    <li class='remediation-card__item'>
                                      <div class='remediation-card__vuln'>
                                        <abbr title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></abbr>
                                        <a href="https://snyk.io/vuln/npm:tunnel-agent:20170305">
                                          Uninitialized Memory Exposure
                                        </a>
                                      </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                      </div>
                </div>
              </div>
              <div class='remediation-card__pane shown' data-pane='patches'>
                <div class='remediation-card__layout-container'>
                      <div class='remediation-card__block'>
                        <div class='remediation-card__expandable-wrapper shown'>
                            <div class='remediation-card__expandable-container js-remediation' >
                              <div class='remediation-card__expandable-title'>
                                <span class='remediation-card__chevron' aria-label="Chevron Down icon" role="img">
                                  <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                                    class="block-expandable__chevron">
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                                      <title>Chevron Down icon</title>
                                    </path>
                                  </svg>
                                </span>
                                <span class='remediation-card__text'>
                                  Patch <strong> lodash </strong>@<strong> 4.17.15 </strong>
                                </span>
                              </div>
                            </div>
                            <div class='remediation-card__expand'>
                                <div class='remediation-card__vuln'>
                                  <abbr title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></abbr>
                                  <a href="https://snyk.io/vuln/SNYK-JS-LODASH-567746">
                                    Prototype Pollution
                                  </a>
                                </div>
                            </div>
                        </div>
                      </div>
                </div>
              </div>
          </div>
        </div>
      </section>


  </main><!-- .layout-stacked__content -->
</body>
<script>
  // collapse vulns in remediations
  const remediations = document.querySelectorAll(".js-remediation");
  remediations.forEach((remediation) => {
    remediation.parentElement.classList.toggle("shown");
    remediation.addEventListener("click", remediationClick);
  })

  // hide all panes
  const allPanes = document.querySelectorAll(\`[data-pane]\`);
  allPanes.forEach((pane) => {
    pane.classList.remove('shown');
  });
  // set first nav item as active & un-hide it's pane
  const remediationNav = document.querySelectorAll(".js-nav");
  remediationNav.forEach((nav) => {
    nav.addEventListener("click", navClick);
  })
  if (remediationNav && remediationNav.length > 0) {
    remediationNav[0].classList.add('active');
    const targetPaneData = remediationNav[0].dataset && remediationNav[0].dataset.toggle;
    if (targetPaneData) {
      showPane(targetPaneData);
    }
  }

  function remediationClick() {
    this.parentElement.classList.toggle("shown");
  }

  function navClick() {
    const remediationNav = document.querySelectorAll(".js-nav");
    remediationNav.forEach((nav) => {
      nav.classList.remove('active');
    });
    this.classList.toggle('active');
    const targetPaneData = this.dataset && this.dataset.toggle;
    if (targetPaneData) {
      showPane(targetPaneData);
    }
  }

  function showPane(targetPaneData) {
    const targetPanes = document.querySelectorAll(\`[data-pane='\${targetPaneData}']\`);
    if (targetPanes) {
      const allPanes = document.querySelectorAll(\`[data-pane]\`);
      allPanes.forEach((pane) => {
        pane.classList.remove('shown');
      });
      targetPanes[0].classList.add('shown');
    }
  }

</script>

</html>


`

exports[`test/snyk-to-html.test.ts TAP test snyk-to-html handles -s argument correctly > should be expected snapshot containing summary template 1`] = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Language" content="en-us">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Snyk test report</title>
  <meta name="description" content="5 known vulnerabilities found in 8 vulnerable dependency paths.">
  <base target="_blank">
  <link rel="icon" type="image/png" href="https://res.cloudinary.com/snyk/image/upload/v1468845142/favicon/favicon.png"
    sizes="194x194">
  <link rel="shortcut icon" href="https://res.cloudinary.com/snyk/image/upload/v1468845142/favicon/favicon.ico">
  <style type="text/css">
  
    body {
      -moz-font-feature-settings: "pnum";
      -webkit-font-feature-settings: "pnum";
      font-variant-numeric: proportional-nums;
      display: flex;
      flex-direction: column;
      font-feature-settings: "pnum";
      font-size: 100%;
      line-height: 1.5;
      min-height: 100vh;
      -webkit-text-size-adjust: 100%;
      margin: 0;
      padding: 0;
      background-color: #F5F5F5;
      font-family: 'Arial', 'Helvetica', Calibri, sans-serif;
    }
  
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 500;
    }
  
    a,
    a:link,
    a:visited {
      border-bottom: 1px solid #4b45a9;
      text-decoration: none;
      color: #4b45a9;
    }
  
    a:hover,
    a:focus,
    a:active {
      border-bottom: 1px solid #4b45a9;
    }
  
    hr {
      border: none;
      margin: 1em 0;
      border-top: 1px solid #c5c5c5;
    }
  
    ul {
      padding: 0 1em;
      margin: 1em 0;
    }
  
    code {
      background-color: #EEE;
      color: #333;
      padding: 0.25em 0.5em;
      border-radius: 0.25em;
    }
  
    pre {
      background-color: #333;
      font-family: monospace;
      padding: 0.5em 1em 0.75em;
      border-radius: 0.25em;
      font-size: 14px;
    }
  
    pre code {
      padding: 0;
      background-color: transparent;
      color: #fff;
    }
  
    a code {
      border-radius: .125rem .125rem 0 0;
      padding-bottom: 0;
      color: #4b45a9;
    }
  
    a[href^="http://"]:after,
    a[href^="https://"]:after {
      background-image: linear-gradient(transparent,transparent),url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20112%20109%22%3E%3Cg%20id%3D%22Page-1%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22link-external%22%3E%3Cg%20id%3D%22arrow%22%3E%3Cpath%20id%3D%22Line%22%20stroke%3D%22%234B45A9%22%20stroke-width%3D%2215%22%20d%3D%22M88.5%2021l-43%2042.5%22%20stroke-linecap%3D%22square%22%2F%3E%3Cpath%20id%3D%22Triangle%22%20fill%3D%22%234B45A9%22%20d%3D%22M111.2%200v50L61%200z%22%2F%3E%3C%2Fg%3E%3Cpath%20id%3D%22square%22%20fill%3D%22%234B45A9%22%20d%3D%22M66%2015H0v94h94V44L79%2059v35H15V30h36z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");
      background-repeat: no-repeat;
      background-size: .75rem;
      content: "";
      display: inline-block;
      height: .75rem;
      margin-left: .25rem;
      width: .75rem;
    }
  
  
  /* Layout */
  
    [class*=layout-container] {
      margin: 0 auto;
      max-width: 71.25em;
      padding: 1.9em 1.3em;
      position: relative;
    }
    .layout-container--short {
      padding-top: 0;
      padding-bottom: 0;
      max-width: 48.75em;
    }
  
    .layout-container--short:after {
      display: block;
      content: "";
      clear: both;
    }
  
  /* Header */
  
    .header {
      padding-bottom: 1px;
    }
  
    .paths {
      margin-left: 8px;
    }
    .header-wrap {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 2em;
    }
    .project__header {
      background-color: #4b45a9;
      color: #fff;
      margin-bottom: -1px;
      padding-top: 1em;
      padding-bottom: 0.25em;
      border-bottom: 2px solid #BBB;
    }
  
    .project__header__title {
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-all;
      margin-bottom: .1em;
      margin-top: 0;
    }
  
    .timestamp {
      float: right;
      clear: none;
      margin-bottom: 0;
    }
  
    .meta-counts {
      clear: both;
      display: block;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 0 1.5em;
      color: #fff;
      clear: both;
      font-size: 1.1em;
    }
  
    .meta-count {
      display: block;
      flex-basis: 100%;
      margin: 0 1em 1em 0;
      float: left;
      padding-right: 1em;
      border-right: 2px solid #fff;
    }
  
    .meta-count:last-child {
      border-right: 0;
      padding-right: 0;
      margin-right: 0;
    }
  
  /* Card */
  
    .card {
      background-color: #fff;
      border: 1px solid #c5c5c5;
      border-radius: .25rem;
      margin: 0 0 2em 0;
      position: relative;
      min-height: 40px;
      padding: 1.5em;
    }
  
    .card .label {
      background-color: #767676;
      border: 2px solid #767676;
      color: white;
      padding: 0.25rem 0.75rem;
      font-size: 0.875rem;
      text-transform: uppercase;
      display: inline-block;
      margin: 0;
      border-radius: 0.25rem;
    }
  
    .card .label__text {
      vertical-align: text-top;
        font-weight: bold;
    }
  
    .card .label--critical {
      background-color: #AB1A1A;
      border-color: #AB1A1A;
    }
  
    .card .label--high {
      background-color: #CE5019;
      border-color: #CE5019;
    }
  
    .card .label--medium {
      background-color: #D68000;
      border-color: #D68000;
    }
  
    .card .label--low {
      background-color: #88879E;
      border-color: #88879E;
    }
  
    .severity--low {
      border-color: #88879E;
    }
  
    .severity--medium {
      border-color: #D68000;
    }
  
    .severity--high {
      border-color: #CE5019;
    }
  
    .severity--critical {
      border-color: #AB1A1A;
    }
  
    .card--vuln {
      padding-top: 4em;
    }
  
    .card--vuln .label {
      left: 0;
      position: absolute;
      top: 1.1em;
      padding-left: 1.9em;
      padding-right: 1.9em;
      border-radius: 0 0.25rem 0.25rem 0;
    }
  
    .card--vuln .card__section h2 {
      font-size: 22px;
      margin-bottom: 0.5em;
    }
  
    .card--vuln .card__section p {
      margin: 0 0 0.5em 0;
    }
  
    .card--vuln .card__meta {
      padding: 0 0 0 1em;
      margin: 0;
      font-size: 1.1em;
    }
  
    .card .card__meta__paths {
      font-size: 0.9em;
    }
  
    .card--vuln .card__title {
      font-size: 28px;
      margin-top: 0;
    }
  
    .card--vuln .card__cta p {
      margin: 0;
      text-align: right;
    }
  
    .source-panel {
      clear: both;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      padding: 0.5em 0;
      width: fit-content;
    }
  
  
  
  </style>
  <style type="text/css">
    .metatable {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      margin-top: 12px;
      border-collapse: collapse;
      border-spacing: 0;
      font-variant-numeric: tabular-nums;
      max-width: 51.75em;
    }
  
    tbody {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      display: flex;
      flex-wrap: wrap;
    }
  
    .meta-row {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      outline: none;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      display: flex;
      align-items: start;
      border-top: 1px solid #d3d3d9;
      padding: 8px 0 0 0;
      border-bottom: none;
      margin: 8px;
      width: 47.75%;
    }
  
    .meta-row-label {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      color: #4c4a73;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      margin: 0;
      outline: none;
      text-decoration: none;
      z-index: auto;
      align-self: start;
      flex: 1;
      font-size: 1rem;
      line-height: 1.5rem;
      padding: 0;
      text-align: left;
      vertical-align: top;
      text-transform: none;
      letter-spacing: 0;
    }
  
    .meta-row-value {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      word-break: break-word;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: right;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
    }
  </style>
</head>

<body class="section-projects">
  <main class="layout-stacked">
        <div class="layout-stacked__header header">
          <header class="project__header">
            <div class="layout-container">
              <a class="brand" href="https://snyk.io" title="Snyk">
                <svg width="68px" height="35px" viewBox="0 0 68 35" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img">
                  <title>Snyk - Open Source Security</title>
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g fill="#fff">
                      <path d="M5.732,27.278 C3.445,27.278 1.589,26.885 0,26.124 L0.483,22.472 C2.163,23.296 4.056,23.689 5.643,23.689 C6.801,23.689 7.563,23.295 7.563,22.599 C7.563,20.594 0.333,21.076 0.333,15.839 C0.333,12.491 3.407,10.729 7.259,10.729 C9.179,10.729 11.161,11.249 12.444,11.704 L11.924,15.294 C10.577,14.774 8.747,14.291 7.222,14.291 C6.282,14.291 5.518,14.621 5.518,15.231 C5.518,17.208 12.903,16.815 12.903,21.925 C12.903,25.325 9.877,27.277 5.733,27.277 L5.732,27.278 Z M25.726,26.936 L25.726,17.894 C25.726,15.827 24.811,14.85 23.069,14.85 C22.219,14.85 21.329,15.09 20.719,15.46 L20.719,26.936 L15.352,26.936 L15.352,11.262 L20.602,10.83 L20.474,13.392 L20.652,13.392 C21.784,11.87 23.702,10.716 25.992,10.716 C28.736,10.716 31.112,12.416 31.112,16.436 L31.112,26.936 L25.724,26.936 L25.726,26.936 Z M61.175,26.936 L56.879,19.479 L56.446,19.479 L56.446,26.935 L51.082,26.935 L51.082,8.37 L56.447,0 L56.447,17.323 C57.515,16.017 61.112,11.059 61.112,11.059 L67.732,11.059 L61.454,17.689 L67.949,26.95 L61.175,26.95 L61.175,26.938 L61.175,26.936 Z M44.13,11.11 L41.93,18.262 C41.5,19.606 41.08,22.079 41.08,22.079 C41.08,22.079 40.75,19.516 40.292,18.172 L37.94,11.108 L31.928,11.108 L38.462,26.935 C37.572,29.04 36.199,30.815 34.369,30.815 C34.039,30.815 33.709,30.802 33.389,30.765 L31.255,34.061 C31.928,34.441 33.212,34.835 34.737,34.835 C38.703,34.835 41.359,31.627 43.215,26.885 L49.443,11.108 L44.132,11.108 L44.13,11.11 Z"></path>
                    </g>
                  </g>
                </svg>
              </a>
              <div class="header-wrap">
                  <h1 class="project__header__title">Snyk test summary</h1>
    
                <p class="timestamp">TIMESTAMP</p>
              </div>
              <div class="source-panel">
                <span>Scanned the following path:</span>
                <ul>
                  <li class="paths">/path/to/npm-lockfile-with-vulns/package-lock.json (npm)</li>
                </ul>
              </div>
    
              <div class="meta-counts">
                <div class="meta-count"><span>5</span> <span>known vulnerabilities</span></div>
                <div class="meta-count"><span>8 vulnerable dependency paths</span></div>
                <div class="meta-count"><span>135</span> <span>dependencies</span></div>
              </div><!-- .meta-counts -->
            </div><!-- .layout-container--short -->
          </header><!-- .project__header -->
        </div><!-- .layout-stacked__header -->
      <section class="layout-container">
          <table class="metatable">
              <tbody>
              <tr class="meta-row"><th class="meta-row-label">Project</th> <td class="meta-row-value">npm-two-vuln-deps</td></tr>
              <tr class="meta-row"><th class="meta-row-label">Path</th> <td class="meta-row-value">/path/to/npm-lockfile-with-vulns</td></tr>
              <tr class="meta-row"><th class="meta-row-label">Package Manager</th> <td class="meta-row-value">npm</td></tr>
              <tr class="meta-row"><th class="meta-row-label">Manifest</th> <td class="meta-row-value">package-lock.json</td></tr>
              </tbody>
          </table>
      </section>
    <div class="layout-container" style="padding-top: 35px;">
      <div class="cards--vuln filter--patch filter--ignore">
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Uninitialized Memory Exposure</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            tunnel-agent
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    npm-two-vuln-deps@1.0.0, twilio@2.11.1 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>tunnel-agent</code> to version 0.6.0 or higher.
        <strong>Note</strong> This is vulnerable only for Node &lt;=4</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/request/tunnel-agent/commit/9ca95ec7219daface8a6fc2674000653de0922c0">GitHub Commit</a></li>
        <li><a href="https://gist.github.com/ChALkeR/fd6b2c445834244e7d440a043f9d2ff4">PoC by ChALkeR</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:tunnel-agent:20170305">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Prototype Pollution</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            minimist
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    npm-two-vuln-deps@1.0.0, sharp@0.17.3 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>minimist</code> to version 0.2.1, 1.2.3 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><p><a href="https://gist.github.com/Kirill89/47feb345b09bf081317f08dd43403a8a">Command Injection PoC</a></p>
        </li>
        <li><p><a href="https://github.com/substack/minimist/commit/63e7ed05aa4b1889ec2f3b196426db4500cbda94">GitHub Fix Commit #1</a></p>
        </li>
        <li><p><a href="https://github.com/substack/minimist/commit/38a4d1caead72ef99e824bb420a2528eec03d9ab">GitHub Fix Commit #2</a></p>
        </li>
        <li><p><a href="https://snyk.io/blog/prototype-pollution-minimist/">Snyk Research Blog</a></p>
        </li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JS-MINIMIST-559764">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Prototype Pollution</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            lodash
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    npm-two-vuln-deps@1.0.0, twilio@2.11.1 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>There is no fixed version for <code>lodash</code>.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://hackerone.com/reports/712065">HackerOne Report</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/SNYK-JS-LODASH-567746">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--medium" data-snyk-test="medium">
            <h2 class="card__title">Prototype Pollution</h2>
            <div class="card__section">
        
                <div class="label label--medium">
                    <span class="label__text">medium severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            hoek
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    npm-two-vuln-deps@1.0.0, twilio@2.11.1 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>hoek</code> to version 4.2.1, 5.0.3 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><p><a href="https://github.com/hapijs/hoek/commit/32ed5c9413321fbc37da5ca81a7cbab693786dee">GitHub Commit</a></p>
        </li>
        <li><p><a href="https://github.com/hapijs/hoek/commit/5aed1a8c4a3d55722d1c799f2368857bf418d6df">GitHub Commit</a></p>
        </li>
        <li><p><a href="https://github.com/hapijs/hoek/issues/230">GitHub Issue</a></p>
        </li>
        <li><p><a href="https://github.com/hapijs/hoek/pull/227">GitHub PR</a></p>
        </li>
        <li><p><a href="https://hackerone.com/reports/310439">HackerOne Report</a></p>
        </li>
        <li><p><a href="http://npmjs.com/advisories/566">NPM Security Advisory</a></p>
        </li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:hoek:20180212">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
        <div class="card card--vuln  disclosure--not-new severity--low" data-snyk-test="low">
            <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
            <div class="card__section">
        
                <div class="label label--low">
                    <span class="label__text">low severity</span>
                </div>
        
                <hr/>
        
                <ul class="card__meta">
                    <li class="card__meta__item">
                        Package Manager: npm
                    </li>
                    <li class="card__meta__item">
                            Vulnerable module:
        
                            ms
                    </li>
        
                    <li class="card__meta__item">Introduced through:
        
        
                                    npm-two-vuln-deps@1.0.0, twilio@2.11.1 and others
                    </li>
                </ul>
        
                <hr/>
        
        
            </div><!-- .card__section -->
        
                <h2 id="remediation">Remediation</h2>
        <p>Upgrade <code>ms</code> to version 2.0.0 or higher.</p>
        <h2 id="references">References</h2>
        <ul>
        <li><a href="https://github.com/zeit/ms/pull/89">GitHub PR</a></li>
        <li><a href="https://github.com/zeit/ms/pull/89/commits/305f2ddcd4eff7cc7c518aca6bb2b2d2daad8fef">GitHub Commit</a></li>
        </ul>
        
        
            <div class="cta card__cta">
                <p><a href="https://snyk.io/vuln/npm:ms:20170412">More about this vulnerability</a></p>
            </div>
        
        </div><!-- .card -->
      </div><!-- cards -->
    </div>
  </main><!-- .layout-stacked__content -->
</body>

</html>


`

exports[`test/snyk-to-html.test.ts TAP test snyk-to-html shows remediation & summary > should be expected snapshot containing actionable remediations 1`] = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Language" content="en-us">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Snyk test report</title>
  <meta name="description" content="1 known vulnerabilities found in 1 vulnerable dependency paths.">
  <base target="_blank">
  <link rel="icon" type="image/png" href="https://res.cloudinary.com/snyk/image/upload/v1468845142/favicon/favicon.png"
    sizes="194x194">
  <link rel="shortcut icon" href="https://res.cloudinary.com/snyk/image/upload/v1468845142/favicon/favicon.ico">
  <style type="text/css">
  
    body {
      -moz-font-feature-settings: "pnum";
      -webkit-font-feature-settings: "pnum";
      font-variant-numeric: proportional-nums;
      display: flex;
      flex-direction: column;
      font-feature-settings: "pnum";
      font-size: 100%;
      line-height: 1.5;
      min-height: 100vh;
      -webkit-text-size-adjust: 100%;
      margin: 0;
      padding: 0;
      background-color: #F5F5F5;
      font-family: 'Arial', 'Helvetica', Calibri, sans-serif;
    }
  
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 500;
    }
  
    a,
    a:link,
    a:visited {
      border-bottom: 1px solid #4b45a9;
      text-decoration: none;
      color: #4b45a9;
    }
  
    a:hover,
    a:focus,
    a:active {
      border-bottom: 1px solid #4b45a9;
    }
  
    hr {
      border: none;
      margin: 1em 0;
      border-top: 1px solid #c5c5c5;
    }
  
    ul {
      padding: 0 1em;
      margin: 1em 0;
    }
  
    code {
      background-color: #EEE;
      color: #333;
      padding: 0.25em 0.5em;
      border-radius: 0.25em;
    }
  
    pre {
      background-color: #333;
      font-family: monospace;
      padding: 0.5em 1em 0.75em;
      border-radius: 0.25em;
      font-size: 14px;
    }
  
    pre code {
      padding: 0;
      background-color: transparent;
      color: #fff;
    }
  
    a code {
      border-radius: .125rem .125rem 0 0;
      padding-bottom: 0;
      color: #4b45a9;
    }
  
    a[href^="http://"]:after,
    a[href^="https://"]:after {
      background-image: linear-gradient(transparent,transparent),url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20112%20109%22%3E%3Cg%20id%3D%22Page-1%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22link-external%22%3E%3Cg%20id%3D%22arrow%22%3E%3Cpath%20id%3D%22Line%22%20stroke%3D%22%234B45A9%22%20stroke-width%3D%2215%22%20d%3D%22M88.5%2021l-43%2042.5%22%20stroke-linecap%3D%22square%22%2F%3E%3Cpath%20id%3D%22Triangle%22%20fill%3D%22%234B45A9%22%20d%3D%22M111.2%200v50L61%200z%22%2F%3E%3C%2Fg%3E%3Cpath%20id%3D%22square%22%20fill%3D%22%234B45A9%22%20d%3D%22M66%2015H0v94h94V44L79%2059v35H15V30h36z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");
      background-repeat: no-repeat;
      background-size: .75rem;
      content: "";
      display: inline-block;
      height: .75rem;
      margin-left: .25rem;
      width: .75rem;
    }
  
  
  /* Layout */
  
    [class*=layout-container] {
      margin: 0 auto;
      max-width: 71.25em;
      padding: 1.9em 1.3em;
      position: relative;
    }
    .layout-container--short {
      padding-top: 0;
      padding-bottom: 0;
      max-width: 48.75em;
    }
  
    .layout-container--short:after {
      display: block;
      content: "";
      clear: both;
    }
  
  /* Header */
  
    .header {
      padding-bottom: 1px;
    }
  
    .paths {
      margin-left: 8px;
    }
    .header-wrap {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 2em;
    }
    .project__header {
      background-color: #4b45a9;
      color: #fff;
      margin-bottom: -1px;
      padding-top: 1em;
      padding-bottom: 0.25em;
      border-bottom: 2px solid #BBB;
    }
  
    .project__header__title {
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-all;
      margin-bottom: .1em;
      margin-top: 0;
    }
  
    .timestamp {
      float: right;
      clear: none;
      margin-bottom: 0;
    }
  
    .meta-counts {
      clear: both;
      display: block;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 0 1.5em;
      color: #fff;
      clear: both;
      font-size: 1.1em;
    }
  
    .meta-count {
      display: block;
      flex-basis: 100%;
      margin: 0 1em 1em 0;
      float: left;
      padding-right: 1em;
      border-right: 2px solid #fff;
    }
  
    .meta-count:last-child {
      border-right: 0;
      padding-right: 0;
      margin-right: 0;
    }
  
  /* Card */
  
    .card {
      background-color: #fff;
      border: 1px solid #c5c5c5;
      border-radius: .25rem;
      margin: 0 0 2em 0;
      position: relative;
      min-height: 40px;
      padding: 1.5em;
    }
  
    .card .label {
      background-color: #767676;
      border: 2px solid #767676;
      color: white;
      padding: 0.25rem 0.75rem;
      font-size: 0.875rem;
      text-transform: uppercase;
      display: inline-block;
      margin: 0;
      border-radius: 0.25rem;
    }
  
    .card .label__text {
      vertical-align: text-top;
        font-weight: bold;
    }
  
    .card .label--critical {
      background-color: #AB1A1A;
      border-color: #AB1A1A;
    }
  
    .card .label--high {
      background-color: #CE5019;
      border-color: #CE5019;
    }
  
    .card .label--medium {
      background-color: #D68000;
      border-color: #D68000;
    }
  
    .card .label--low {
      background-color: #88879E;
      border-color: #88879E;
    }
  
    .severity--low {
      border-color: #88879E;
    }
  
    .severity--medium {
      border-color: #D68000;
    }
  
    .severity--high {
      border-color: #CE5019;
    }
  
    .severity--critical {
      border-color: #AB1A1A;
    }
  
    .card--vuln {
      padding-top: 4em;
    }
  
    .card--vuln .label {
      left: 0;
      position: absolute;
      top: 1.1em;
      padding-left: 1.9em;
      padding-right: 1.9em;
      border-radius: 0 0.25rem 0.25rem 0;
    }
  
    .card--vuln .card__section h2 {
      font-size: 22px;
      margin-bottom: 0.5em;
    }
  
    .card--vuln .card__section p {
      margin: 0 0 0.5em 0;
    }
  
    .card--vuln .card__meta {
      padding: 0 0 0 1em;
      margin: 0;
      font-size: 1.1em;
    }
  
    .card .card__meta__paths {
      font-size: 0.9em;
    }
  
    .card--vuln .card__title {
      font-size: 28px;
      margin-top: 0;
    }
  
    .card--vuln .card__cta p {
      margin: 0;
      text-align: right;
    }
  
    .source-panel {
      clear: both;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      padding: 0.5em 0;
      width: fit-content;
    }
  
  
  
  </style>
  <style type="text/css">
    .remediation-card {
      background-color: #edecf6;
      border-radius: 2px;
      padding: 1px;
      box-shadow: inset 0 0 0 1px #938fc7, 0 0 0 2px transparent;
      border-radius: 2px;
    }
    .remediation-card__header {
      align-items: center;
      background-color: #fff;
      border-radius: 4px 4px 0 0;
      display: flex;
      justify-content: space-between;
      position: relative;
    }
    .remediation-card__body {
      background-color: #edecf6;
      border-top-color: #938fc7;
      padding: 0;
      border-top: 1px solid #d3d3d9;
      position: relative;
    }
    .remediation-card__layout-container {
      max-width: 1440px;
      margin-left: auto;
      margin-right: auto;
      padding: 0 20px;
    }
    .remediation-card__pane.shown {
      background-color: #fff;
      border-top: 1px solid #d3d3d9;
      padding: 32px 0;
      display: block;
      visibility: visible;
      height: auto;
    }
    .remediation-card__pane {
      display: none;
      visibility: hidden;
      height: 0;
    }
    .remediation-card__nav {
      position: relative;
      top: 1px;
    }
    .remediation-card__nav-list {
      display: flex;
      margin: 0 0;
      padding: 0 0;
    }
    .remediation-card__nav-item {
      white-space: nowrap;
      list-style-type: none;
      color: #4b45a1;
      margin: 0;
    }
    .remediation-card__nav-item.active {
      background-color: #fff;
      white-space: nowrap;
      list-style-type: none;
      color: #4b45a1;
      margin: 0;
    }
    .remediation-card__nav-link {
      color: #727184;
      border: 1px solid transparent;
      border-top-width: 3px;
      border-bottom-color: #d3d3d9;
      display: inline-block;
      height: 44px;
      padding: 12px 16px 12px;
      cursor: pointer;
      font-size: 1rem;
      outline: none;
    }
    .remediation-card__nav-item.active > .remediation-card__nav-link {
      color: #393842;
      border: 1px solid #d3d3d9;
      border-bottom: none;
      border-top: 3px solid #D68000;
      border-radius: .25rem .25rem 0 0;
      display: inline-block;
      height: 44px;
      padding: 12px 16px 12px;
      cursor: pointer;
      font-size: 1rem;
      outline: none;
    }
    .remediation-card__block {
      background-color: #fff;
      box-shadow: inset 0 0 0 1px hsl(244, 8%, 84%);
      border-radius: 2px;
      padding: 1px;
      margin-top: 12px;
    }
    .remediation-card__expandable-container {
      cursor: pointer;
      align-items: stretch;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
    }
    .remediation-card__expandable-wrapper >  .remediation-card__expand {
      visibility: hidden;
      height: 0;
      display: none;
    }
  
    .remediation-card__expandable-wrapper.shown > .remediation-card__expand {
      visibility: visible;
      height: auto;
      display: block;
    }
  
    .remediation-card__expandable-title {
      align-items: center;
      display: flex;
      font-size: 1rem;
      padding: 12px;
      position: relative;
      width: 100%;
    }
    .remediation-card__chevron {
      display: inline-block;
      margin-right: 8px;
      transition: transform .2s ease-in-out;
      position: relative;
    }
    .remediation-card__expandable-wrapper svg {
      transform: rotate(-90deg);
    }
    .remediation-card__expandable-wrapper.shown svg {
      transform: initial;
    }
    .remediation-card__chevron .block-expandable__chevron {
      width: 20px;
      height: 20px;
    }
    .remediation-card__chevron .scoped {
      display: inline-block;
      fill: currentColor;
      overflow: hidden;
      vertical-align: middle;
    }
    .remediation-card__severity {
      margin-right: 8px;
      font-size: .75rem;
      line-height: 1.35;
    }
    .remediation-card__severity-text {
      padding: 0;
      text-align: center;
      width: 26px;
      color: white;
      margin-right: 8px;
      font-size: .75rem;
    }
    .remediation-card__severity-label {
      position: relative;
      top: 1px;
    }
  
    .remediation-card__severity--critical {
      background-color: #ab1a1a;
      border-color: #ab1a1a;
    }
    .remediation-card__severity--high {
      background-color: #CE5019;
      border-color: #CE5019;
    }
    .remediation-card__severity--medium {
      background-color: #D68000;
      border-color: #D68000;
    }
    .remediation-card__severity--low {
      background-color: #88879E;
      border-color: #88879E;
    }
    .remediation-card__h2 {
      color: #393842;
      display: block;
      padding: 16px 24px 12px;
      width: 100%;
    }
    .remediation-card__item {
      padding-left: 0;
      padding-right: 0;
      list-style: none;
    }
    .remediation-card__vuln {
      align-items: center;
      border-top: 1px solid #b3b2bd;
      display: flex;
      padding: 12px;
    }
  </style>
  <style type="text/css">
    .metatable {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      margin-top: 12px;
      border-collapse: collapse;
      border-spacing: 0;
      font-variant-numeric: tabular-nums;
      max-width: 51.75em;
    }
  
    tbody {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      display: flex;
      flex-wrap: wrap;
    }
  
    .meta-row {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      outline: none;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      display: flex;
      align-items: start;
      border-top: 1px solid #d3d3d9;
      padding: 8px 0 0 0;
      border-bottom: none;
      margin: 8px;
      width: 47.75%;
    }
  
    .meta-row-label {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      color: #4c4a73;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      margin: 0;
      outline: none;
      text-decoration: none;
      z-index: auto;
      align-self: start;
      flex: 1;
      font-size: 1rem;
      line-height: 1.5rem;
      padding: 0;
      text-align: left;
      vertical-align: top;
      text-transform: none;
      letter-spacing: 0;
    }
  
    .meta-row-value {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      word-break: break-word;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: right;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
    }
  </style>
</head>

<body class="test-remediation-section-projects">
  <main class="layout-stacked">
        <div class="layout-stacked__header header">
          <header class="project__header">
            <div class="layout-container">
              <a class="brand" href="https://snyk.io" title="Snyk">
                <svg width="68px" height="35px" viewBox="0 0 68 35" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img">
                  <title>Snyk - Open Source Security</title>
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g fill="#fff">
                      <path d="M5.732,27.278 C3.445,27.278 1.589,26.885 0,26.124 L0.483,22.472 C2.163,23.296 4.056,23.689 5.643,23.689 C6.801,23.689 7.563,23.295 7.563,22.599 C7.563,20.594 0.333,21.076 0.333,15.839 C0.333,12.491 3.407,10.729 7.259,10.729 C9.179,10.729 11.161,11.249 12.444,11.704 L11.924,15.294 C10.577,14.774 8.747,14.291 7.222,14.291 C6.282,14.291 5.518,14.621 5.518,15.231 C5.518,17.208 12.903,16.815 12.903,21.925 C12.903,25.325 9.877,27.277 5.733,27.277 L5.732,27.278 Z M25.726,26.936 L25.726,17.894 C25.726,15.827 24.811,14.85 23.069,14.85 C22.219,14.85 21.329,15.09 20.719,15.46 L20.719,26.936 L15.352,26.936 L15.352,11.262 L20.602,10.83 L20.474,13.392 L20.652,13.392 C21.784,11.87 23.702,10.716 25.992,10.716 C28.736,10.716 31.112,12.416 31.112,16.436 L31.112,26.936 L25.724,26.936 L25.726,26.936 Z M61.175,26.936 L56.879,19.479 L56.446,19.479 L56.446,26.935 L51.082,26.935 L51.082,8.37 L56.447,0 L56.447,17.323 C57.515,16.017 61.112,11.059 61.112,11.059 L67.732,11.059 L61.454,17.689 L67.949,26.95 L61.175,26.95 L61.175,26.938 L61.175,26.936 Z M44.13,11.11 L41.93,18.262 C41.5,19.606 41.08,22.079 41.08,22.079 C41.08,22.079 40.75,19.516 40.292,18.172 L37.94,11.108 L31.928,11.108 L38.462,26.935 C37.572,29.04 36.199,30.815 34.369,30.815 C34.039,30.815 33.709,30.802 33.389,30.765 L31.255,34.061 C31.928,34.441 33.212,34.835 34.737,34.835 C38.703,34.835 41.359,31.627 43.215,26.885 L49.443,11.108 L44.132,11.108 L44.13,11.11 Z"></path>
                    </g>
                  </g>
                </svg>
              </a>
              <div class="header-wrap">
                  <h1 class="project__header__title">Snyk test summary</h1>
    
                <p class="timestamp">TIMESTAMP</p>
              </div>
              <div class="source-panel">
                <span>Scanned the following path:</span>
                <ul>
                  <li class="paths">/Users/lili/www/snyk-fixtures/python-pip-app-with-vulns/requirements.txt (pip)</li>
                </ul>
              </div>
    
              <div class="meta-counts">
                <div class="meta-count"><span>1</span> <span>known vulnerabilities</span></div>
                <div class="meta-count"><span>1 vulnerable dependency paths</span></div>
                <div class="meta-count"><span>7</span> <span>dependencies</span></div>
              </div><!-- .meta-counts -->
            </div><!-- .layout-container--short -->
          </header><!-- .project__header -->
        </div><!-- .layout-stacked__header -->
      <section class="layout-container">
          <table class="metatable">
              <tbody>
              <tr class="meta-row"><th class="meta-row-label">Project</th> <td class="meta-row-value">python-pip-app-with-vulns</td></tr>
              <tr class="meta-row"><th class="meta-row-label">Path</th> <td class="meta-row-value">/Users/lili/www/snyk-fixtures/python-pip-app-with-vulns</td></tr>
              <tr class="meta-row"><th class="meta-row-label">Package Manager</th> <td class="meta-row-value">pip</td></tr>
              <tr class="meta-row"><th class="meta-row-label">Manifest</th> <td class="meta-row-value">requirements.txt</td></tr>
              </tbody>
          </table>
      </section>
      <section class="layout-container">
        <div class='remediation-card'>
          <header class="remediation-card__header">
            <span class="remediation-card__h2"><h2>Remediation advice</h2></span>
          </header>
          <div class='remediation-card__body'>
            <!---maybe a wrapper div-->
            <div class='remediation-card__layout-container'>
              <nav class="remediation-card__nav">
                <ul class="remediation-card__nav-list">
                  <li class="remediation-card__nav-item js-nav" data-toggle="pins"><span class="remediation-card__nav-link">Pinnable Issues (1)</span></li>
                </ul>
              </nav>
            </div>
              <div class='remediation-card__pane shown test-remediation-pins' data-pane="pins">
                <div class='remediation-card__layout-container'>
                      <div class='remediation-card__block'>
                        <div class='remediation-card__expandable-wrapper shown'>
                            <div class='remediation-card__expandable-container js-remediation' >
                              <div class='remediation-card__expandable-title'>
                                <span class='remediation-card__chevron' aria-label="Chevron Down icon" role="img">
                                  <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                                    class="block-expandable__chevron">
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                                      <title>Chevron Down icon</title>
                                    </path>
                                  </svg>
                                </span>
                                <span class='remediation-card__text'>
                                    Upgrade direct dependency <strong> django@1.6.1 </strong> to <strong> django@1.6.3 </strong>
                                </span>
                              </div>
                            </div>
                            <div class='remediation-card__expand'>
                                <!--each vuln for the upgrade -->
                                <ul>
                                <li class='remediation-card__item'>
                                  <div class='remediation-card__vuln'>
                                    <abbr title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></abbr>
                                    <a href="https://snyk.io/vuln/SNYK-PYTHON-DJANGO-40025">
                                      Arbitrary Code Execution
                                    </a>
                                  </div>
                                </li>
                                </ul>
                            </div>
                        </div>
                      </div>
                </div>
              </div>
          </div>
        </div>
      </section>


  </main><!-- .layout-stacked__content -->
</body>
<script>
  // collapse vulns in remediations
  const remediations = document.querySelectorAll(".js-remediation");
  remediations.forEach((remediation) => {
    remediation.parentElement.classList.toggle("shown");
    remediation.addEventListener("click", remediationClick);
  })

  // hide all panes
  const allPanes = document.querySelectorAll(\`[data-pane]\`);
  allPanes.forEach((pane) => {
    pane.classList.remove('shown');
  });
  // set first nav item as active & un-hide it's pane
  const remediationNav = document.querySelectorAll(".js-nav");
  remediationNav.forEach((nav) => {
    nav.addEventListener("click", navClick);
  })
  if (remediationNav && remediationNav.length > 0) {
    remediationNav[0].classList.add('active');
    const targetPaneData = remediationNav[0].dataset && remediationNav[0].dataset.toggle;
    if (targetPaneData) {
      showPane(targetPaneData);
    }
  }

  function remediationClick() {
    this.parentElement.classList.toggle("shown");
  }

  function navClick() {
    const remediationNav = document.querySelectorAll(".js-nav");
    remediationNav.forEach((nav) => {
      nav.classList.remove('active');
    });
    this.classList.toggle('active');
    const targetPaneData = this.dataset && this.dataset.toggle;
    if (targetPaneData) {
      showPane(targetPaneData);
    }
  }

  function showPane(targetPaneData) {
    const targetPanes = document.querySelectorAll(\`[data-pane='\${targetPaneData}']\`);
    if (targetPanes) {
      const allPanes = document.querySelectorAll(\`[data-pane]\`);
      allPanes.forEach((pane) => {
        pane.classList.remove('shown');
      });
      targetPanes[0].classList.add('shown');
    }
  }

</script>

</html>


`

exports[`test/snyk-to-html.test.ts TAP test snyk-to-html shows remediation with pins > should be expected snapshot containing actionable remediation 1`] = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Language" content="en-us">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Snyk test report</title>
  <meta name="description" content="1 known vulnerabilities found in 1 vulnerable dependency paths.">
  <base target="_blank">
  <link rel="icon" type="image/png" href="https://res.cloudinary.com/snyk/image/upload/v1468845142/favicon/favicon.png"
    sizes="194x194">
  <link rel="shortcut icon" href="https://res.cloudinary.com/snyk/image/upload/v1468845142/favicon/favicon.ico">
  <style type="text/css">
  
    body {
      -moz-font-feature-settings: "pnum";
      -webkit-font-feature-settings: "pnum";
      font-variant-numeric: proportional-nums;
      display: flex;
      flex-direction: column;
      font-feature-settings: "pnum";
      font-size: 100%;
      line-height: 1.5;
      min-height: 100vh;
      -webkit-text-size-adjust: 100%;
      margin: 0;
      padding: 0;
      background-color: #F5F5F5;
      font-family: 'Arial', 'Helvetica', Calibri, sans-serif;
    }
  
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 500;
    }
  
    a,
    a:link,
    a:visited {
      border-bottom: 1px solid #4b45a9;
      text-decoration: none;
      color: #4b45a9;
    }
  
    a:hover,
    a:focus,
    a:active {
      border-bottom: 1px solid #4b45a9;
    }
  
    hr {
      border: none;
      margin: 1em 0;
      border-top: 1px solid #c5c5c5;
    }
  
    ul {
      padding: 0 1em;
      margin: 1em 0;
    }
  
    code {
      background-color: #EEE;
      color: #333;
      padding: 0.25em 0.5em;
      border-radius: 0.25em;
    }
  
    pre {
      background-color: #333;
      font-family: monospace;
      padding: 0.5em 1em 0.75em;
      border-radius: 0.25em;
      font-size: 14px;
    }
  
    pre code {
      padding: 0;
      background-color: transparent;
      color: #fff;
    }
  
    a code {
      border-radius: .125rem .125rem 0 0;
      padding-bottom: 0;
      color: #4b45a9;
    }
  
    a[href^="http://"]:after,
    a[href^="https://"]:after {
      background-image: linear-gradient(transparent,transparent),url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20112%20109%22%3E%3Cg%20id%3D%22Page-1%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22link-external%22%3E%3Cg%20id%3D%22arrow%22%3E%3Cpath%20id%3D%22Line%22%20stroke%3D%22%234B45A9%22%20stroke-width%3D%2215%22%20d%3D%22M88.5%2021l-43%2042.5%22%20stroke-linecap%3D%22square%22%2F%3E%3Cpath%20id%3D%22Triangle%22%20fill%3D%22%234B45A9%22%20d%3D%22M111.2%200v50L61%200z%22%2F%3E%3C%2Fg%3E%3Cpath%20id%3D%22square%22%20fill%3D%22%234B45A9%22%20d%3D%22M66%2015H0v94h94V44L79%2059v35H15V30h36z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");
      background-repeat: no-repeat;
      background-size: .75rem;
      content: "";
      display: inline-block;
      height: .75rem;
      margin-left: .25rem;
      width: .75rem;
    }
  
  
  /* Layout */
  
    [class*=layout-container] {
      margin: 0 auto;
      max-width: 71.25em;
      padding: 1.9em 1.3em;
      position: relative;
    }
    .layout-container--short {
      padding-top: 0;
      padding-bottom: 0;
      max-width: 48.75em;
    }
  
    .layout-container--short:after {
      display: block;
      content: "";
      clear: both;
    }
  
  /* Header */
  
    .header {
      padding-bottom: 1px;
    }
  
    .paths {
      margin-left: 8px;
    }
    .header-wrap {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 2em;
    }
    .project__header {
      background-color: #4b45a9;
      color: #fff;
      margin-bottom: -1px;
      padding-top: 1em;
      padding-bottom: 0.25em;
      border-bottom: 2px solid #BBB;
    }
  
    .project__header__title {
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-all;
      margin-bottom: .1em;
      margin-top: 0;
    }
  
    .timestamp {
      float: right;
      clear: none;
      margin-bottom: 0;
    }
  
    .meta-counts {
      clear: both;
      display: block;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 0 1.5em;
      color: #fff;
      clear: both;
      font-size: 1.1em;
    }
  
    .meta-count {
      display: block;
      flex-basis: 100%;
      margin: 0 1em 1em 0;
      float: left;
      padding-right: 1em;
      border-right: 2px solid #fff;
    }
  
    .meta-count:last-child {
      border-right: 0;
      padding-right: 0;
      margin-right: 0;
    }
  
  /* Card */
  
    .card {
      background-color: #fff;
      border: 1px solid #c5c5c5;
      border-radius: .25rem;
      margin: 0 0 2em 0;
      position: relative;
      min-height: 40px;
      padding: 1.5em;
    }
  
    .card .label {
      background-color: #767676;
      border: 2px solid #767676;
      color: white;
      padding: 0.25rem 0.75rem;
      font-size: 0.875rem;
      text-transform: uppercase;
      display: inline-block;
      margin: 0;
      border-radius: 0.25rem;
    }
  
    .card .label__text {
      vertical-align: text-top;
        font-weight: bold;
    }
  
    .card .label--critical {
      background-color: #AB1A1A;
      border-color: #AB1A1A;
    }
  
    .card .label--high {
      background-color: #CE5019;
      border-color: #CE5019;
    }
  
    .card .label--medium {
      background-color: #D68000;
      border-color: #D68000;
    }
  
    .card .label--low {
      background-color: #88879E;
      border-color: #88879E;
    }
  
    .severity--low {
      border-color: #88879E;
    }
  
    .severity--medium {
      border-color: #D68000;
    }
  
    .severity--high {
      border-color: #CE5019;
    }
  
    .severity--critical {
      border-color: #AB1A1A;
    }
  
    .card--vuln {
      padding-top: 4em;
    }
  
    .card--vuln .label {
      left: 0;
      position: absolute;
      top: 1.1em;
      padding-left: 1.9em;
      padding-right: 1.9em;
      border-radius: 0 0.25rem 0.25rem 0;
    }
  
    .card--vuln .card__section h2 {
      font-size: 22px;
      margin-bottom: 0.5em;
    }
  
    .card--vuln .card__section p {
      margin: 0 0 0.5em 0;
    }
  
    .card--vuln .card__meta {
      padding: 0 0 0 1em;
      margin: 0;
      font-size: 1.1em;
    }
  
    .card .card__meta__paths {
      font-size: 0.9em;
    }
  
    .card--vuln .card__title {
      font-size: 28px;
      margin-top: 0;
    }
  
    .card--vuln .card__cta p {
      margin: 0;
      text-align: right;
    }
  
    .source-panel {
      clear: both;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      padding: 0.5em 0;
      width: fit-content;
    }
  
  
  
  </style>
  <style type="text/css">
    .remediation-card {
      background-color: #edecf6;
      border-radius: 2px;
      padding: 1px;
      box-shadow: inset 0 0 0 1px #938fc7, 0 0 0 2px transparent;
      border-radius: 2px;
    }
    .remediation-card__header {
      align-items: center;
      background-color: #fff;
      border-radius: 4px 4px 0 0;
      display: flex;
      justify-content: space-between;
      position: relative;
    }
    .remediation-card__body {
      background-color: #edecf6;
      border-top-color: #938fc7;
      padding: 0;
      border-top: 1px solid #d3d3d9;
      position: relative;
    }
    .remediation-card__layout-container {
      max-width: 1440px;
      margin-left: auto;
      margin-right: auto;
      padding: 0 20px;
    }
    .remediation-card__pane.shown {
      background-color: #fff;
      border-top: 1px solid #d3d3d9;
      padding: 32px 0;
      display: block;
      visibility: visible;
      height: auto;
    }
    .remediation-card__pane {
      display: none;
      visibility: hidden;
      height: 0;
    }
    .remediation-card__nav {
      position: relative;
      top: 1px;
    }
    .remediation-card__nav-list {
      display: flex;
      margin: 0 0;
      padding: 0 0;
    }
    .remediation-card__nav-item {
      white-space: nowrap;
      list-style-type: none;
      color: #4b45a1;
      margin: 0;
    }
    .remediation-card__nav-item.active {
      background-color: #fff;
      white-space: nowrap;
      list-style-type: none;
      color: #4b45a1;
      margin: 0;
    }
    .remediation-card__nav-link {
      color: #727184;
      border: 1px solid transparent;
      border-top-width: 3px;
      border-bottom-color: #d3d3d9;
      display: inline-block;
      height: 44px;
      padding: 12px 16px 12px;
      cursor: pointer;
      font-size: 1rem;
      outline: none;
    }
    .remediation-card__nav-item.active > .remediation-card__nav-link {
      color: #393842;
      border: 1px solid #d3d3d9;
      border-bottom: none;
      border-top: 3px solid #D68000;
      border-radius: .25rem .25rem 0 0;
      display: inline-block;
      height: 44px;
      padding: 12px 16px 12px;
      cursor: pointer;
      font-size: 1rem;
      outline: none;
    }
    .remediation-card__block {
      background-color: #fff;
      box-shadow: inset 0 0 0 1px hsl(244, 8%, 84%);
      border-radius: 2px;
      padding: 1px;
      margin-top: 12px;
    }
    .remediation-card__expandable-container {
      cursor: pointer;
      align-items: stretch;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
    }
    .remediation-card__expandable-wrapper >  .remediation-card__expand {
      visibility: hidden;
      height: 0;
      display: none;
    }
  
    .remediation-card__expandable-wrapper.shown > .remediation-card__expand {
      visibility: visible;
      height: auto;
      display: block;
    }
  
    .remediation-card__expandable-title {
      align-items: center;
      display: flex;
      font-size: 1rem;
      padding: 12px;
      position: relative;
      width: 100%;
    }
    .remediation-card__chevron {
      display: inline-block;
      margin-right: 8px;
      transition: transform .2s ease-in-out;
      position: relative;
    }
    .remediation-card__expandable-wrapper svg {
      transform: rotate(-90deg);
    }
    .remediation-card__expandable-wrapper.shown svg {
      transform: initial;
    }
    .remediation-card__chevron .block-expandable__chevron {
      width: 20px;
      height: 20px;
    }
    .remediation-card__chevron .scoped {
      display: inline-block;
      fill: currentColor;
      overflow: hidden;
      vertical-align: middle;
    }
    .remediation-card__severity {
      margin-right: 8px;
      font-size: .75rem;
      line-height: 1.35;
    }
    .remediation-card__severity-text {
      padding: 0;
      text-align: center;
      width: 26px;
      color: white;
      margin-right: 8px;
      font-size: .75rem;
    }
    .remediation-card__severity-label {
      position: relative;
      top: 1px;
    }
  
    .remediation-card__severity--critical {
      background-color: #ab1a1a;
      border-color: #ab1a1a;
    }
    .remediation-card__severity--high {
      background-color: #CE5019;
      border-color: #CE5019;
    }
    .remediation-card__severity--medium {
      background-color: #D68000;
      border-color: #D68000;
    }
    .remediation-card__severity--low {
      background-color: #88879E;
      border-color: #88879E;
    }
    .remediation-card__h2 {
      color: #393842;
      display: block;
      padding: 16px 24px 12px;
      width: 100%;
    }
    .remediation-card__item {
      padding-left: 0;
      padding-right: 0;
      list-style: none;
    }
    .remediation-card__vuln {
      align-items: center;
      border-top: 1px solid #b3b2bd;
      display: flex;
      padding: 12px;
    }
  </style>
  <style type="text/css">
    .metatable {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      margin-top: 12px;
      border-collapse: collapse;
      border-spacing: 0;
      font-variant-numeric: tabular-nums;
      max-width: 51.75em;
    }
  
    tbody {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      display: flex;
      flex-wrap: wrap;
    }
  
    .meta-row {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      outline: none;
      text-align: left;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
      display: flex;
      align-items: start;
      border-top: 1px solid #d3d3d9;
      padding: 8px 0 0 0;
      border-bottom: none;
      margin: 8px;
      width: 47.75%;
    }
  
    .meta-row-label {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      color: #4c4a73;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      margin: 0;
      outline: none;
      text-decoration: none;
      z-index: auto;
      align-self: start;
      flex: 1;
      font-size: 1rem;
      line-height: 1.5rem;
      padding: 0;
      text-align: left;
      vertical-align: top;
      text-transform: none;
      letter-spacing: 0;
    }
  
    .meta-row-value {
      text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      color: inherit;
      font-feature-settings: "pnum";
      border-collapse: collapse;
      border-spacing: 0;
      word-break: break-word;
      box-sizing: border-box;
      background: transparent;
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      outline: none;
      padding: 0;
      text-align: right;
      text-decoration: none;
      vertical-align: baseline;
      z-index: auto;
    }
  </style>
</head>

<body class="test-remediation-section-projects">
  <main class="layout-stacked">
        <div class="layout-stacked__header header">
          <header class="project__header">
            <div class="layout-container">
              <a class="brand" href="https://snyk.io" title="Snyk">
                <svg width="68px" height="35px" viewBox="0 0 68 35" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img">
                  <title>Snyk - Open Source Security</title>
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g fill="#fff">
                      <path d="M5.732,27.278 C3.445,27.278 1.589,26.885 0,26.124 L0.483,22.472 C2.163,23.296 4.056,23.689 5.643,23.689 C6.801,23.689 7.563,23.295 7.563,22.599 C7.563,20.594 0.333,21.076 0.333,15.839 C0.333,12.491 3.407,10.729 7.259,10.729 C9.179,10.729 11.161,11.249 12.444,11.704 L11.924,15.294 C10.577,14.774 8.747,14.291 7.222,14.291 C6.282,14.291 5.518,14.621 5.518,15.231 C5.518,17.208 12.903,16.815 12.903,21.925 C12.903,25.325 9.877,27.277 5.733,27.277 L5.732,27.278 Z M25.726,26.936 L25.726,17.894 C25.726,15.827 24.811,14.85 23.069,14.85 C22.219,14.85 21.329,15.09 20.719,15.46 L20.719,26.936 L15.352,26.936 L15.352,11.262 L20.602,10.83 L20.474,13.392 L20.652,13.392 C21.784,11.87 23.702,10.716 25.992,10.716 C28.736,10.716 31.112,12.416 31.112,16.436 L31.112,26.936 L25.724,26.936 L25.726,26.936 Z M61.175,26.936 L56.879,19.479 L56.446,19.479 L56.446,26.935 L51.082,26.935 L51.082,8.37 L56.447,0 L56.447,17.323 C57.515,16.017 61.112,11.059 61.112,11.059 L67.732,11.059 L61.454,17.689 L67.949,26.95 L61.175,26.95 L61.175,26.938 L61.175,26.936 Z M44.13,11.11 L41.93,18.262 C41.5,19.606 41.08,22.079 41.08,22.079 C41.08,22.079 40.75,19.516 40.292,18.172 L37.94,11.108 L31.928,11.108 L38.462,26.935 C37.572,29.04 36.199,30.815 34.369,30.815 C34.039,30.815 33.709,30.802 33.389,30.765 L31.255,34.061 C31.928,34.441 33.212,34.835 34.737,34.835 C38.703,34.835 41.359,31.627 43.215,26.885 L49.443,11.108 L44.132,11.108 L44.13,11.11 Z"></path>
                    </g>
                  </g>
                </svg>
              </a>
              <div class="header-wrap">
                  <h1 class="project__header__title">Snyk test report</h1>
    
                <p class="timestamp">TIMESTAMP</p>
              </div>
              <div class="source-panel">
                <span>Scanned the following path:</span>
                <ul>
                  <li class="paths">/Users/lili/www/snyk-fixtures/python-pip-app-with-vulns/requirements.txt (pip)</li>
                </ul>
              </div>
    
              <div class="meta-counts">
                <div class="meta-count"><span>1</span> <span>known vulnerabilities</span></div>
                <div class="meta-count"><span>1 vulnerable dependency paths</span></div>
                <div class="meta-count"><span>7</span> <span>dependencies</span></div>
              </div><!-- .meta-counts -->
            </div><!-- .layout-container--short -->
          </header><!-- .project__header -->
        </div><!-- .layout-stacked__header -->
      <section class="layout-container">
          <table class="metatable">
              <tbody>
              <tr class="meta-row"><th class="meta-row-label">Project</th> <td class="meta-row-value">python-pip-app-with-vulns</td></tr>
              <tr class="meta-row"><th class="meta-row-label">Path</th> <td class="meta-row-value">/Users/lili/www/snyk-fixtures/python-pip-app-with-vulns</td></tr>
              <tr class="meta-row"><th class="meta-row-label">Package Manager</th> <td class="meta-row-value">pip</td></tr>
              <tr class="meta-row"><th class="meta-row-label">Manifest</th> <td class="meta-row-value">requirements.txt</td></tr>
              </tbody>
          </table>
      </section>
      <section class="layout-container">
        <div class='remediation-card'>
          <header class="remediation-card__header">
            <span class="remediation-card__h2"><h2>Remediation advice</h2></span>
          </header>
          <div class='remediation-card__body'>
            <!---maybe a wrapper div-->
            <div class='remediation-card__layout-container'>
              <nav class="remediation-card__nav">
                <ul class="remediation-card__nav-list">
                  <li class="remediation-card__nav-item js-nav" data-toggle="pins"><span class="remediation-card__nav-link">Pinnable Issues (1)</span></li>
                </ul>
              </nav>
            </div>
              <div class='remediation-card__pane shown test-remediation-pins' data-pane="pins">
                <div class='remediation-card__layout-container'>
                      <div class='remediation-card__block'>
                        <div class='remediation-card__expandable-wrapper shown'>
                            <div class='remediation-card__expandable-container js-remediation' >
                              <div class='remediation-card__expandable-title'>
                                <span class='remediation-card__chevron' aria-label="Chevron Down icon" role="img">
                                  <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                                    class="block-expandable__chevron">
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                                      <title>Chevron Down icon</title>
                                    </path>
                                  </svg>
                                </span>
                                <span class='remediation-card__text'>
                                    Upgrade direct dependency <strong> django@1.6.1 </strong> to <strong> django@1.6.3 </strong>
                                </span>
                              </div>
                            </div>
                            <div class='remediation-card__expand'>
                                <!--each vuln for the upgrade -->
                                <ul>
                                <li class='remediation-card__item'>
                                  <div class='remediation-card__vuln'>
                                    <abbr title="medium severity issues" class="remediation-card__severity-text remediation-card__severity--medium"><span class="remediation-card__label">M</span></abbr>
                                    <a href="https://snyk.io/vuln/SNYK-PYTHON-DJANGO-40025">
                                      Arbitrary Code Execution
                                    </a>
                                  </div>
                                </li>
                                </ul>
                            </div>
                        </div>
                      </div>
                </div>
              </div>
          </div>
        </div>
      </section>


  </main><!-- .layout-stacked__content -->
</body>
<script>
  // collapse vulns in remediations
  const remediations = document.querySelectorAll(".js-remediation");
  remediations.forEach((remediation) => {
    remediation.parentElement.classList.toggle("shown");
    remediation.addEventListener("click", remediationClick);
  })

  // hide all panes
  const allPanes = document.querySelectorAll(\`[data-pane]\`);
  allPanes.forEach((pane) => {
    pane.classList.remove('shown');
  });
  // set first nav item as active & un-hide it's pane
  const remediationNav = document.querySelectorAll(".js-nav");
  remediationNav.forEach((nav) => {
    nav.addEventListener("click", navClick);
  })
  if (remediationNav && remediationNav.length > 0) {
    remediationNav[0].classList.add('active');
    const targetPaneData = remediationNav[0].dataset && remediationNav[0].dataset.toggle;
    if (targetPaneData) {
      showPane(targetPaneData);
    }
  }

  function remediationClick() {
    this.parentElement.classList.toggle("shown");
  }

  function navClick() {
    const remediationNav = document.querySelectorAll(".js-nav");
    remediationNav.forEach((nav) => {
      nav.classList.remove('active');
    });
    this.classList.toggle('active');
    const targetPaneData = this.dataset && this.dataset.toggle;
    if (targetPaneData) {
      showPane(targetPaneData);
    }
  }

  function showPane(targetPaneData) {
    const targetPanes = document.querySelectorAll(\`[data-pane='\${targetPaneData}']\`);
    if (targetPanes) {
      const allPanes = document.querySelectorAll(\`[data-pane]\`);
      allPanes.forEach((pane) => {
        pane.classList.remove('shown');
      });
      targetPanes[0].classList.add('shown');
    }
  }

</script>

</html>


`
