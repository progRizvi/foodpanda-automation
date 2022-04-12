/// <reference types="Cypress" />

describe('Vouchers page', () => {
	it("Vouchers page", () => {
		cy.get("#dLabel").click();
		cy.get("ul").find("a").contains("Vouchers").click();
		cy.wait(4000);
	});
	
})
