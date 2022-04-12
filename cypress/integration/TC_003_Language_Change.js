describe("Toggle Language", () => {
	it("Language Change", () => {
		cy.get('[data-testid="language-switch"]').click();
		cy.wait(4000);
		cy.get('[data-testid="language-switch"]').click();
	});
});
