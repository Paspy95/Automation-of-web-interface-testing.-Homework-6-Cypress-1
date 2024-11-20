describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.contains("Add new").click();
    cy.addBook("Сталкер", "Хоррор", "Братья");
    cy.deliteBook("Add to favorite", "h4", "Delete from favorite");
    cy.contains("Please add some book").should("be.visible");
  });
});
