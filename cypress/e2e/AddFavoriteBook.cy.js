describe("template spec", () => {
    it("passes", () => {
      cy.visit("/");
      cy.login("test@test.com", "test");
      cy.get('[href="book/9856a4a5-adec-4236-acbb-c9b082e91710"] > .h-100 > .card-footer > .btn').click();
      cy.contains("Delete from favorite").should("be.visible");
    });
  });
  