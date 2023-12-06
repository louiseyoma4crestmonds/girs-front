export const checkDesktopForNotes = () => {
  // get my notes
  cy.contains("My Notes").click();
  cy.wait(2000);
  // cannot add new notes without title
  // cy.get(".Button_btn__07RiK").click();
  // cy.get(".NoteAdd_textarea__q_UHZ").type("amazing video");
  // cy.get(".NoteAdd_buttonFrame2__AuzZT > .Button_btn__07RiK").click();
  // cy.contains("Please enter note title").should("be.visible");
  // add new notes
  // cy.get(".NoteAdd_titlePane__3YfzF").type("note 1");
  // cy.get(".NoteAdd_buttonFrame2__AuzZT > .Button_btn__07RiK").click();
  // cy.wait(1000);
  // close add note modal
  // cy.get(".Button_btn__07RiK").click({ multiple: true, force: true });
  // cy.wait(3000);
  // cy.get(".Closebutton_buttonObject__qSct1").as("btn").click({ force: true });
  // cy.wait(2000);
  // // search note
  // cy.get(".mr-5 > :nth-child(2) > .border-none").type("test");
  // cy.wait(2000);
  // // sort note
  // cy.get(".flex-row > :nth-child(2) > .border-none").select("First Created");
  // cy.wait(2000);
  // cy.get(".flex-row > :nth-child(2) > .border-none").select("Last Created");
};

declare global {
  namespace Cypress {
    interface Chainable {
      checkDesktopForNotes: typeof checkDesktopForNotes;
    }
  }
}
