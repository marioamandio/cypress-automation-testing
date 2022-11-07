/// <reference types="Cypress" />

describe("same origin policy", () => {
  it("should be able to visit different super domain", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#automation-test-store").invoke("removeAttr", "target").click();
  });

  it("origin command", () => {
    cy.origin("webdriveruniversity.com", () => {
      cy.visit("/");
    });

    cy.origin("automationteststore.com", () => {
      cy.visit("/");
    });

    cy.visit("http://www.webdriveruniversity.com");
    cy.visit("http://www.selectors.webdriveruniversity.com");
  });
});
