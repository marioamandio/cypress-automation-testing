/// <reference types="Cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
  it("naviagating to specific product pages", () => {
    cy.visit("https://www.automationteststore.com/");

    //  the following will fail
    // const makeupLink = cy
    //   .get("a[href*='product/category&path=']")
    //   .contains("Makeup");
    // makeupLink.click();

    // the following will pass
    // const skincare = cy
    //   .get("a[href*='product/category&path=']")
    //   .contains("Skincare");
    // skincare.click();

    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("a[href*='product/category&path=']").contains("Skincare").click();
  });

  it("naviagating to specific product pages", () => {
    cy.visit("https://www.automationteststore.com/");

    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("h1 .maintext").then((x) => {
      const headerText = x.text();
      expect(headerText).is.eq("Makeup");
    });
  });

  it.only("Validate properties of the contact us page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    // Uses cypress commands and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");

    // JQuery Approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstNameText = text.find("#field_11").text();
      expect(firstNameText).to.contain("First name");

      // Embedded commands
      cy.get("#field_11").then((fnText) => {
        cy.log(fnText.text());
      });
    });
  });
});
