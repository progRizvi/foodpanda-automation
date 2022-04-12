/// <reference types="cypress" />




describe("Rewards shop", () => {
	it("Rewards shop", () => {
		cy.get('[data-testid="account-link-authenticated"]').click();
		cy.contains("Challenges & rewards").click();
		cy.wait(4000);
		cy.contains("Rewards shop").click();
		cy.wait(2000);
	});
});
