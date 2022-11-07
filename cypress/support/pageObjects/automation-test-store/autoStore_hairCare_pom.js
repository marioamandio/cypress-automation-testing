class autoStoreHairCarePOM {
  addHairCareProductToBasket() {
    globalThis.data.productName.forEach((product) => {
      cy.addProductToBasket(product);
      //   .debug();
    });

    cy.get(".dropdown-toggle > .fa").click();
  }
}

export default autoStoreHairCarePOM;
