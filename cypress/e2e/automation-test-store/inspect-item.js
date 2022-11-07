/// <reference types="Cypress" />
/// <reference types="Cypress-xpath" />

describe("Inspect Automation Test Store items using chain of commands", () => {
  it("Click on the first item using item header", () => {
    cy.visit("https://www.automationteststore.com/");
    //a[contains(@href, 'contact')]
    cy.get(
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname"
    ).click();
  });

  it.only("Click on the first item using item text", () => {
    cy.visit("https://www.automationteststore.com/");
    //a[contains(@href, 'contact')]
    cy.get(".prdocutname")
      .contains("Skinsheen Bronzer Stick")
      .click()
      .then((itemHeaderText) => {
        console.log(itemHeaderText.text());
      });
  });

  it("Click on the first item using item index", () => {
    cy.visit("https://www.automationteststore.com/");
    //a[contains(@href, 'contact')]
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
  });
});
