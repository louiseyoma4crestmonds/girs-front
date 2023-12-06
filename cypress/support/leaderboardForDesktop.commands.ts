export const leaderboardForDesktop = () => {
  let utilityRole: string;
  // let leaderboardRole: string;

  // get leaderboard page
  cy.contains("Leaderboard").click();
  cy.wait(5000);
  // cy.url().should("be.equal", `${Cypress.config("baseUrl")}/leaderboard`);

  cy.get("#utilityMary\\ Okafor").then(($response) => {
    const roleValue1 = $response.text();
    /* eslint-disable */
    utilityRole = roleValue1;
    /* eslint-disable */
  });

  // cy.get("#firstDiv").then(($firstDiv) => {
  //   if ($firstDiv) {
  //     cy.get("#userMaryOkafor").then(($response) => {
  //       const roleValue2 = $response.text();
  //       /* eslint-disable */
  //       leaderboardRole = roleValue2;
  //       /* eslint-disable */
  //     });
  //   }
  // });

  // expect(utilityRole).to.eq(leaderboardRole);
};

declare global {
  namespace Cypress {
    interface Chainable {
      leaderboardForDesktop: typeof leaderboardForDesktop;
    }
  }
}
