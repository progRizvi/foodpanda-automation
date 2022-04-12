/// <reference types="Cypress" />

import login from "./TC_002_2.3_Login_pass";

login();
describe("Refund Account page", () => {
	it("Refund Account page", () => {
		cy.get("#dLabel").click();
		cy.get("ul").find("a").contains("Refund Account").click();
		cy.get('[data-testid="nudge"]').click();
		cy.wait(4000);
		cy.get('[data-testid="onboarding-next-button"]').click();
		cy.wait(1000);
		cy.get('[data-testid="onboarding-next-button"]').click();
		cy.wait(1000);
		cy.get('[data-testid="onboarding-next-button"]').click();
		cy.wait(1000);
		cy.get('[data-testid="onboarding-next-button"]').click();
		cy.wait(1000);
		cy.get('[data-testid="onboarding-agree-button"]').click();
		cy.get('[data-testid="settings-link"] > .fl-interaction-primary').click();
		cy.get('[data-testid="show-wallet-setting-payment-methods"]').click();
		cy.get(".action-cta").click();
	});
});
