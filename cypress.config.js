const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: '4',
    testIsolation: false,
    "chromeWebSecurity": false,
    "exprimentalSessionSupport": true,
    "watchForFileChanges": false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
