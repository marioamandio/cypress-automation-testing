/// <reference types="Cypress" />

describe("handle js alerts", () => {
  it("Confirm js alert contains the correct text", () => {
    cy.visit("http://www.webdriveruniversity.com");

    // this is incredible
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();

    cy.get("#button1").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });

  it("validate js alert box correctly when clicking ok", () => {
    cy.visit("http://www.webdriveruniversity.com");

    // this is incredible
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();

    cy.get("#button4").click();

    cy.on("window:confirm", () => true);

    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });

  it("validate js alert box correctly when clicking cancel", () => {
    cy.visit("http://www.webdriveruniversity.com");

    // this is incredible
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();

    cy.on("window:confirm", () => false);

    cy.get("#button4").click();

    cy.get("#confirm-alert-text").contains("You pressed Cancel!");
  });

  it("validate js alert box correctly using a stub", () => {
    cy.visit("http://www.webdriveruniversity.com");

    // this is incredible
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();

    const stub = cy.stub();
    cy.on("window:confirm", stub);

    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      })
      .then(() => false)
      .then(() => {
        cy.get("#confirm-alert-text").contains("You pressed OK!");
      });
  });
});
