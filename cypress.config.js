const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'https://rozetka.delivery',
//     async setupNodeEvents(on, config) {
//       // implement node event listeners here
//       const bundler = createBundler({
//         plugins: [createEsbuildPlugin(config)],
//       });
//       on("file:preprocessor", bundler);
//       await addCucumberPreprocessorPlugin(on, config);
     
//       return config;
//     },
//     specPattern: "cypress/integration/**/*.feature",
//   },
//  });
//  require('@applitools/eyes-cypress')(module);




module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://rozetka.delivery',
    async setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

require('@applitools/eyes-cypress')(module);
