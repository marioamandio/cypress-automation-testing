/// <reference types="Cypress" />

describe("Interact with dropdown lists via webdriveruni", () => {
  it("Select specific values via select dropdown list", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();

    cy.get("#dropdowm-menu-1").select("c#");
    cy.get("#dropdowm-menu-2").select("testng").should("have.value", "testng");
    cy.get("#dropdowm-menu-3").select("JQuery").contains("JQuery");

    cy.get("#dropdowm-menu-2").select("Maven").contains("Maven");
    cy.get("#dropdowm-menu-2").select("junit").should("have.value", "junit");
  });
});
