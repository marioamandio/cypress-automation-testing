describe("Hooks", () => {
  before(() => {
    cy.log("runs once before all tests in the block");
    // runs once before all tests in the block
  });

  beforeEach(() => {
    // runs before each test in the block
    cy.log("runs before each test in the block");
  });

  afterEach(() => {
    // runs after each test in the block
    cy.log("runs after each test in the block");
  });

  after(() => {
    cy.log("runs once after all tests in the block");
    // runs once after all tests in the block
  });

  it("Example test one", () => {
    cy.log("example test 1");
  });

  it("Example test 2", () => {
    cy.log("example test 2");
  });
});
