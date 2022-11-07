class HomePage_POM {
  visitHomepage() {
    cy.visit(Cypress.env("webdriveruni_homepage"), { timeout: 60000 });
  }

  clickON_contactUs_button() {
    cy.get("#contact-us")
      .invoke("removeAttr", "target")
      .click({ timeout: 8000 });
  }
}

export default HomePage_POM;
