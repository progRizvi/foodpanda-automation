/// <reference types= "Cypress" />
describe("Load Home Page", () => {
	it("Load Home Page", () => {
		cy.visit("/");
	});
});
