describe("template spec", () => {
    it("passes", () => {
      cy.visit("/");
      cy.contains('Log in').click();
      cy.get("#pass").type("test");
      cy.contains("Submit").click();
      cy.get("#mail").then($el=>$el[0].checkValidity()).should('be.false');
    });
  });
  