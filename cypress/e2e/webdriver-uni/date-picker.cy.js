/// <reference types="Cypress" />

describe("test date picker via webdriveuni", () => {
  it("select date from date picker", () => {
    cy.visit("/");
    cy.get("#datepicker").invoke("removeAttr", "target").click();

    cy.get("#datepicker").click();

    let date = new Date();
    date.setDate(date.getDate() + 200);
    let futureYear = date.getFullYear();
    let futureMonth = date.toLocaleDateString("default", { month: "long" });
    let futureDay = date.getDate();

    cy.log(futureYear, futureMonth, futureDay);

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        })
        .then((currentDate) => {
          if (!currentDate.text().includes(futureMonth)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        });
    }

    function selectFutureDAy() {
      cy.get(".day").contains(futureDay).click();
    }

    selectMonthAndYear();
    selectFutureDAy();
  });
});
