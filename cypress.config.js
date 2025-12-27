const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    supportFile: 'cypress/support/commands.js',

    watchForFileChanges: false,
    setupNodeEvents(on, config) {

    },
  },
});
