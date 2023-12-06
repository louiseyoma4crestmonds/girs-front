export const checkMobileForNotes = () => {
  cy.get('[class="laptop:hidden"]').should("be.visible").click();
  cy.contains("My Notes").should("be.visible").click();
  cy.wait(3000);
  cy.get(
    '.invisible > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"] > [alt="Sort Note"]'
  ).click();
  // add new notes without title
  cy.get(".NoteAdd_textarea__q_UHZ").type("amazing video");
  cy.get(".NoteAdd_buttonFrame2__AuzZT > .Button_btn__07RiK").click();
  cy.contains("Please enter note title").should("be.visible");
  // add new notes
  cy.get(".NoteAdd_titlePane__3YfzF").type("note 1");
  cy.get(".NoteAdd_buttonFrame2__AuzZT > .Button_btn__07RiK").click();
  cy.wait(2000);
  // close add note modal
  cy.get(".Button_btn__07RiK").click({ multiple: true, force: true });
  cy.wait(3000);
  cy.get(".Closebutton_buttonObject__qSct1").as("btn").click({ force: true });
  cy.wait(2000);
  // search note
  cy.get(".mr-5 > :nth-child(2) > .border-none").type("test");
  cy.wait(2000);
  // sort note
  cy.get(".flex-row > :nth-child(2) > .border-none").select("First Created");
  cy.wait(2000);
  cy.get(".flex-row > :nth-child(2) > .border-none").select("Last Created");
};

declare global {
  namespace Cypress {
    interface Chainable {
      checkMobileForNotes: typeof checkMobileForNotes;
    }
  }
}
