/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#data-table").invoke("removeAttr", "target").click();
  });
  it("Calculate and assert the total age of all users", () => {
    const userDetails = [];
    cy.get("#thumbnail-1 td")
      .each((el, i) => {
        userDetails[i] = el.text();
      })
      .then(() => {
        const totalAgeValues = userDetails.reduce(
          (acc, cur) => (Number(cur) ? acc + Number(cur) : acc),
          0
        );
        expect(totalAgeValues).to.equal(322);
      });
  });

  it("Calculate and assert the age of a given user based on the last name", () => {
    const userDetails = [];
    cy.get("#thumbnail-1 tr td:nth-child(2)").each((el, i) => {
      const text = el.text();

      if (text.includes("Woods")) {
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(i)
          .next()
          .then((age) => {
            expect(age.text()).to.equal("80");
          });
      }
    });
  });
});
