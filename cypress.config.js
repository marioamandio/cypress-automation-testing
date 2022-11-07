const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "w6hjoo",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js, jsx, ts, tsx, feature}",
    excludeSpecPattern: "cypress/e2e/other/*.js",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 2000,
    pageLoadTimeout: 12000,
    baseUrl: "http://www.webdriveruniversity.com",
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    viewportWidth: 1280,
    viewportHeight: 800,
    video: false,
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "http://www.webdriveruniversity.com",
    },
  },
});
