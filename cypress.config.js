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
  },
});
