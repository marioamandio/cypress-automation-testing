class autoStoreHomepagePOM {
  accessHomepage() {
    cy.visit("https://www.automationteststore.com/");
  }

  clickOnHairCareLink() {
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  }
}

export default autoStoreHomepagePOM;
