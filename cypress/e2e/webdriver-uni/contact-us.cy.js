import Homepage_POM from "../../support/pageObjects/webdriver-uni/Homepage_pom";
import CONTACT_US_POM from "../../support/pageObjects/webdriver-uni/Contact_us_pom";
/// <reference types="Cypress" />

describe("Test contact us form via webdriverUni", () => {
  Cypress.config("defaultCommandTimeout", 20000); // overrides default command timeout
  const homePage_PO = new Homepage_POM();

  const contactUsPagePOM = new CONTACT_US_POM();

  before(() => {
    cy.fixture("example").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    homePage_PO.visitHomepage();
    // cy.wait(3000);
    homePage_PO.clickON_contactUs_button();
    // cy.pause()
  });
  it.only("Should be able to submit a successful submission via contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");

    // cy.pause()
    // cy.wait()

    // get current url
    cy.url().should("include", "contactus");

    contactUsPagePOM.contactForm_submission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "this is a random comment",
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    contactUsPagePOM.contactForm_submission(
      data.first_name,
      data.last_name,
      " ",
      "this is a random comment",
      "body",
      "Error: Invalid email address"
    );
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");

    // get current url
    cy.url().should("include", "contactus");

    cy.webdriverUni_contactForm_submission(
      data.first_name,
      data.last_name,
      data.email,
      "this is a random comment",
      "h1",
      "Thank You for your Message!"
    );
  });
});
