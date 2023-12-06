export const checkDesktopForLogout = () => {
  cy.get(".UserProfileMenu_userProfileMenuToggle__cfypG > button")
    .should("be.visible")
    .click();
  cy.get(".py-1 > .cursor-pointer").click();
  cy.wait(2000);
  cy.url().should("contain", "/sign-in");
};

declare global {
  namespace Cypress {
    interface Chainable {
      checkDesktopForLogout: typeof checkDesktopForLogout;
    }
  }
}
