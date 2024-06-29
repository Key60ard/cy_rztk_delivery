const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://rozetka.delivery',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

require('@applitools/eyes-cypress')(module);
