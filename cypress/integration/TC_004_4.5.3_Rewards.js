/// <reference types="cypress" />

import login from "./TC_002_2.3_Login_pass";

login();
describe("Rewards shop", () => {
	it("Rewards shop", () => {
		cy.get('[data-testid="account-link-authenticated"]').click();
		cy.contains("Challenges & rewards").click();
		cy.wait(4000);
		cy.contains("Rewards shop").click();
		cy.wait(2000);
	});
});
