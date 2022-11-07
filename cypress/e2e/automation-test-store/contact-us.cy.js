/// <reference types="Cypress" />
/// <reference types="Cypress-xpath" />

describe("Test contact us form via automation test store", () => {
  before(() => {
    cy.viewport("iphone-6");
    cy.fixture("userDetails").as("user");
  });
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://www.automationteststore.com/");
    //a[contains(@href, 'contact')]
    // a[href$=contact]
    cy.get("a[href$='contact']")
      .click()
      .then((x) => {
        cy.log("this is the output text " + x.text());
        console.log(x.text());
      });
    // cy.xpath("//a[contains(@href, 'contact')]").click();
    cy.get("@user").then((user) => {
      cy.get("#ContactUsFrm_first_name").type(user.first_name);
      cy.get("#ContactUsFrm_email").type(user.email);
    });
    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type("Foo Bar");
    cy.get("button[title='Submit']").click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
});
