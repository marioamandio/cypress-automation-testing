/// <reference types="Cypress" />

describe("Alias and invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://www.automationteststore.com/");

    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");

    cy.get("@productThumbnail").its("length").should("be.gt", 5);

    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it("validate product thumbnail", () => {
    cy.visit("https://www.automationteststore.com/");

    // cy.get(".thumbnail").its("length").should("be", 16);
    cy.get(".thumbnail").as("thumbnails");

    cy.get("@thumbnails").should("have.length", 16);
    // cy.get("@thumbnails").each((x) => {
    //   cy.wrap(x).get("[title='Add to Cart']");
    // });

    cy.get("@thumbnails")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it("calculate total of normal and sale products", () => {
    cy.visit("https://www.automationteststore.com/");

    // cy.get(".thumbnail").its("length").should("be", 16);
    cy.get(".thumbnail").as("thumbnails");

    // cy.get("@thumbnails")
    //   .find(".oneprice")
    //   .each((el) => {
    //     cy.log(el.text());
    //   });
    cy.get("@thumbnails").find(".oneprice").invoke("text").as("itemPrice");
    cy.get("@thumbnails").find(".pricenew").invoke("text").as("saleItemPrice");

    let itemsTotal = 0;
    cy.get("@itemPrice").then((linkText) => {
      const itemPriceTotal = linkText
        .split("$")
        .reduce((acc, price) => acc + Number(price), 0);

      itemsTotal += itemPriceTotal;
    });
    cy.get("@saleItemPrice")
      .then((linkText) => {
        const salePriceTotal = linkText
          .split("$")
          .reduce((acc, price) => acc + Number(price), 0);

        itemsTotal += salePriceTotal;
      })
      .then(() => {
        expect(itemsTotal).to.equal(626.6);
      });
  });
});
