export const profileForDesktop = () => {
  cy.get(".UserProfileMenu_userProfileMenuToggle__cfypG > button").click();
  cy.get(".border-b").click();
  cy.wait(5000);
  // cy.url().should("be.equal", `${Cypress.config("baseUrl")}/profile`);
  cy.get(":nth-child(1) > .ProfileTab_profileTabSpan__iEVj_").should(
    "be.visible"
  );
  cy.get(":nth-child(2) > .ProfileTab_profileTabSpan__iEVj_").should(
    "be.visible"
  );
  cy.get("#firstName").clear().type("Mary");
  cy.get("#lastName").clear().type("Okafor");
  cy.get("#email").clear().type("mary.okafor@gmail.com");
  cy.get("#phone").clear().type("08130486042");
  cy.get(".ProfileTab_profiletabBtn__cYowG").click();
  cy.wait(50000);
  cy.get(".ProfileTab_successMsg__dwuYo").should("be.visible");
  cy.get(".ProfileTabLeftSide_profiletabLeftSideLabel__1_nNw")
    .selectFile("cypress/fixtures/first task.PNG")
    .click();
  cy.get(".ProfileTabLeftSide_modalText2__eFqEv").should(
    "have.text",
    "Profile picture updated successfully"
  );
  cy.get("[class='absolute top-5 right-5 z-50'] ").click();
  cy.wait(5000);
  cy.get(".ProfileTabLeftSide_removePhotoText__iTvbc").click();
  cy.get("#removeProfilePicture").click();
  cy.wait(5000);
  cy.contains("Change Password").click();
  cy.wait(50000);

  cy.get("#current").should("be.visible");
  cy.get("#new").should("be.visible");
  cy.get("#confirm").should("be.visible");
  cy.get("#changePasswordButton").should("be.visible");
};

declare global {
  namespace Cypress {
    interface Chainable {
      profileForDesktop: typeof profileForDesktop;
    }
  }
}
