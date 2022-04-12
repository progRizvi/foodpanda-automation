/// <reference types="cypress" />
describe("My Order", () => {
	it("My Order", () => {
		cy.get("#dLabel").click();
		cy.wait(4000);
		cy.get("ul").contains("Orders & reordering").click();
		cy.wait(4000);
	});
});
