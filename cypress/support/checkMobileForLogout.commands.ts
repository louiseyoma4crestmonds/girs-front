export const checkMobileForLogout = () => {
  cy.get("#menuIcon").should("be.visible").click();
  cy.contains("Logout").should("be.visible");
  cy.wait(1000);
};

declare global {
  namespace Cypress {
    interface Chainable {
      checkMobileForLogout: typeof checkMobileForLogout;
    }
  }
}
