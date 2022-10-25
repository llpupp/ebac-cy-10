const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rtn1th',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity: false
  },
});
