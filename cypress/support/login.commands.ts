export const login2 = (email: any, password: any) => {
  cy.get("#email").type(email);
  cy.get("#password").type(password);
  cy.wait(2000);
  cy.get("#acceptCookieButton").click();
  cy.get(".SigninPage_signinButton__Zc0HL").click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      login2: typeof login2;
    }
  }
}
