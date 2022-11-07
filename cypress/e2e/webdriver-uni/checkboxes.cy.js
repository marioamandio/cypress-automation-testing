/// <reference types="Cypress" />

describe("Verify checkboaxes via webdriver uni", () => {
  beforeEach(function () {
    cy.navigate_to_webdriverUni_homepage();
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();
  });
  it("Check and validate checkbox", () => {
    cy.get("#checkboxes > :nth-child(1) > input").as("option1");
    cy.get("@option1").check().should("be.checked");

    cy.get("#checkboxes > :nth-child(3) > input").as("option3");
    cy.get("@option3").uncheck().should("not.be.checked");
  });

  it("Check multiple checkboxes", () => {
    cy.get("input[type='checkbox']")
      .check(["option-1", "option-2", "option-4"])
      .should("be.checked");
  });
});
