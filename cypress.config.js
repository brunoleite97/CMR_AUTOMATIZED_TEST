const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { configureAllureAdapterPlugins } = require("@mmisty/cypress-allure-adapter/plugins");
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      configureAllureAdapterPlugins(on, config)
      on('after:run', (results) => {
        const data = `Environment=${process.env.ENVIRONMENT}\\nBrowser=${results.browserName}\\nBrowserVersion=${results.browserVersion}`
        fs.writeFile('allure-results/environment.properties', data, (err) => {
          if (err) throw err;
        });        
      })
      return config;
    },
  },

  env: {
    allure: true,
    senha: '1234',
    baseUrl: 'https://cloud.idurarapp.com',
    ENVIRONMENT: 'DEV',
  },

  video: true,
  watchForFileChanges: false,

  setupNodeEvents(on, config) {
    return require("./cypress/plugins/index.js")(on, config);
  },
});
