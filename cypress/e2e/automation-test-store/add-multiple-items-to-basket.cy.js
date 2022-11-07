import HomePagePOM from "../../support/pageObjects/automation-test-store/autoStore_homepage_pom";
import HairCarePOM from "../../support/pageObjects/automation-test-store/autoStore_hairCare_pom";

/// <reference types="Cypress" />

describe("Add multiple items to basket", () => {
  const homePagePOM = new HomePagePOM();
  const hairCarePagePOM = new HairCarePOM();
  before(() => {
    cy.fixture("products").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    homePagePOM.accessHomepage();
    homePagePOM.clickOnHairCareLink();
    // cy.visit("https://www.automationteststore.com/");
    // cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });

  it("Add specific items to basket", () => {
    hairCarePagePOM.addHairCareProductToBasket();
  });
});
