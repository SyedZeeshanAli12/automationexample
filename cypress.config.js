const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: '40',
    testIsolation: false,
    "chromeWebSecurity": false,
    "exprimentalSessionSupport": true,
    "watchForFileChanges": false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
      "reporterEnabled": "mocha-junit-reporter, mochawesome",
      "mochaJunitReporterReporterOptions": {
        "mochaFile": "cypress/reports/junit/test-results.[hash].xml",
        "toConsole": true
      },
      "mochawesomeReporterOptions": {
        "reportDir": "cypress/reports/mochawesome",
        "overwrite": false,
        "html": false,
        "json": true
      }
    }
  },
});
