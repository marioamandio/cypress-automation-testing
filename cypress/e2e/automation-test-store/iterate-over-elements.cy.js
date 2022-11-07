/// <reference types="Cypress" />

describe("Iterate over elements", () => {
  beforeEach(() => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });

  it("Log information of all hair care products", () => {
    cy.get(".fixed_wrapper .prdocutname").each((el) => {
      cy.log(el.text());
    });
  });

  it("add specific product to basket", () => {
    cy.selectProduct("Curls to straight Shampoo");
  });

  it("add another specific product to basket", () => {
    cy.selectProduct("Eau Parfumee au The Vert Shampoo");
  });
});
