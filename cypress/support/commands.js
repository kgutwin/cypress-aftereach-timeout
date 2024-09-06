Cypress.Commands.add("reproduce", () => {
  cy.visit("index.html");
  cy.get('[data-cy="item"]', { timeout: 5000 }).should("exist");
});
