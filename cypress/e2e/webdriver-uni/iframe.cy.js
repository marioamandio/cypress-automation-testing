/// <reference types="Cypress" />

describe("Handling iframe and modals", () => {
  it("handle webdriveruni iframe and modal", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#iframe").invoke("removeAttr", "target").click();

    cy.get("#frame").then((frame) => {
      const body = frame.contents().find("body");
      cy.wrap(body).as("iframe");
    });

    cy.get("@iframe").find("#button-find-out-more").click();

    cy.get("@iframe").find("#myModal").as("modal");

    cy.get("@modal").should(($text) => {
      const text = $text.text();
      expect(text).to.include(
        "Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras..."
      );
    });

    cy.get("@modal").contains("Close").click();
  });
});
