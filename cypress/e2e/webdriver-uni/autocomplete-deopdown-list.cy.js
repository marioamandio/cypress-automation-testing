/// <reference types="Cypress" />

describe("Veridy autocomplete dropdown lists via webdriveruni", () => {
  it("Select specific product via autocomplete list", () => {
    cy.visit("/");
    cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click();

    cy.get("#myInput").type("A");
    cy.get("#myInputautocomplete-list > *").as("suggestedProducts");

    cy.get("@suggestedProducts")
      .each((el, i) => {
        const prod = el.text();
        const productToSelect = "Avacado";
        if (prod === productToSelect) {
          cy.wrap(el).click();
          cy.get("#submit-button").click();

          cy.url().should("include", productToSelect);
        }
      })
      .then(() => {
        cy.get("#myInput").type("G");

        cy.get("@suggestedProducts").each((el, i) => {
          const prod = el.text();
          const productToSelect = "Grapes";
          if (prod === productToSelect) {
            cy.wrap(el).click();
            cy.get("#submit-button").click();

            cy.url().should("include", productToSelect);
          }
        });
      });
  });
});
