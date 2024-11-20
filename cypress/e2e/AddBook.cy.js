describe("template spec", () => {
    it("passes", () => {
      cy.visit("/");
      cy.login("test@test.com", "test");
      cy.contains("Add new").click();
      cy.addBook("Сталкер", "Хоррор" , "Братья")
      cy.contains("Сталкер").click();
      cy.contains("Братья").should("be.visible");
    });
  });
  