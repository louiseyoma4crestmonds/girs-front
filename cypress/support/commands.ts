/// <reference types="cypress" />
import { cypressURL } from "../../src/services/connection";
import { checkDesktopForLogout } from "./checkDesktopForLogout.commands";
import { checkDesktopForNotes } from "./checkDesktopForNotes.commands";
import { checkMobileForLogout } from "./checkMobileForLogout.commands";
import { checkMobileForNotes } from "./checkMobileForNotes.commands";
import { leaderboardForDesktop } from "./leaderboardForDesktop.commands";
import { login2 } from "./login.commands";
import { profileForDesktop } from "./profileForDesktop.commands";

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<Element>;
      loadDashboard(email: string, password: string): Chainable<Element>;
      loadSignInPage(): Chainable<Element>;
      iframeCustom(): Chainable<Element>;
      checkElementExists(selector: any): Chainable<Element>;
    }
  }
}
Cypress.Commands.add("loadSignInPage", () => {
  cy.visit(cypressURL + "sign-in");
  cy.wait(4000);
  cy.get("#acceptCookieButton").click();
});

Cypress.Commands.add("login", (email, password) => {
  cy.loadSignInPage();
  cy.wait(3000);
  cy.get("#email").type(email);
  cy.get("#password").type(password);
  cy.get("#signInButton").click();
});

Cypress.Commands.add("loadDashboard", (email, password) => {
  cy.login(email, password);
  cy.viewport("macbook-15");
  cy.wait(5000);
  cy.url().then(($url) => {
    if ($url.includes("dashboard")) {
      cy.log("Dashboard loaded");
    } else {
      cy.log("Loggin not successful");
    }
  });
});

Cypress.Commands.add("checkMobileForNotes", checkMobileForNotes);
Cypress.Commands.add("checkDesktopForNotes", checkDesktopForNotes);
Cypress.Commands.add("login2", login2);
Cypress.Commands.add("checkMobileForLogout", checkMobileForLogout);
Cypress.Commands.add("checkDesktopForLogout", checkDesktopForLogout);
Cypress.Commands.add("leaderboardForDesktop", leaderboardForDesktop);
Cypress.Commands.add("profileForDesktop", profileForDesktop);

Cypress.Commands.add(
  "iframeCustom" as any,
  { prevSubject: "element" },
  ($iframe) =>
    new Cypress.Promise((resolve) =>
      $iframe.ready(function () {
        resolve($iframe.contents().find("body"));
      })
    )
);

Cypress.Commands.add("checkElementExists" as any, (selector: any) =>
  cy.get(selector).should("exist").then(cy.wrap)
);
