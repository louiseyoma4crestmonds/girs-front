import { defineConfig } from "cypress";

export default defineConfig({
  watchForFileChanges: false,
  e2e: {
    // baseUrl: "http://localhost:3000",
    baseUrl: "http://test.crestlearn.crestagile.com:9000",
    setupNodeEvents() {
      // implement node event listeners here
    },
    screenshotOnRunFailure: false,
    video: false,
    defaultCommandTimeout: 30000,
    requestTimeout: 30000,
    chromeWebSecurity: false,
  },

  reporter: "mochawesome",
  reporterOptions: {
    // disable overwrite to generate many JSON reports
    overwrite: false,
    // do not generate intermediate HTML reports
    html: false,
    // generate intermediate JSON reports
    json: true,
  },
  video: false,
  screenshotOnRunFailure: false,
});
