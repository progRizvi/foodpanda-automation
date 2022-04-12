/// <reference types="Cypress" />

const login = () => {
	describe("Login with userName and Password", () => {
		it("Login with userName and Password", () => {
			cy.visit("/");
			cy.get('[data-testid="account-link-login"]').click();
			cy.get('[data-testid="welcome-view-button-continue"]').click();
			cy.wait(2000);
			cy.get('[data-testid="email-view-text-field"]').type(
				"rizvimail03@gmail.com"
			);
			cy.wait(2000);
			cy.get(".button").click();
			cy.wait(2000);
			cy.get('[data-testid="login-view-field-password"]').type(
				"rizvi123456789"
			);
			cy.wait(2000);
			cy.get(".mt-md").click();
		});
	});
};
export default login;
