/// <reference types="cypress" />
describe("page", () => {
  afterEach(() => {
    cy.visit("index.html");
    cy.get('[data-cy="item"]', { timeout: 5000 }).should("exist");
  });

  it("fails", () => {
    // trigger a test failure
    cy.contains("failure", { timeout: 500 }).should("exist");
    // commenting out the above line causes the afterEach hook to succeed
  });
});
