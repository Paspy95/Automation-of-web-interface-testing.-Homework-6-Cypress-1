describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.contains("Log out").should("be.visible");
  });
});
