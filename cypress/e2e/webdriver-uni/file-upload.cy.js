/// <reference types="Cypress" />

describe("upload file via webdriveuni", () => {
  it("upload a file", () => {
    cy.visit("/");
    cy.get("#file-upload").invoke("removeAttr", "target").click();
    cy.get("#myFile").selectFile("cypress/fixtures/laptop.png");
    cy.get("#submit-button").click();
  });

  it.only("upload no file", () => {
    cy.visit("/");
    cy.get("#file-upload").invoke("removeAttr", "target").click();
    cy.get("#submit-button").click();
  });
});
