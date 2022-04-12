/// <reference types="Cypress" />

import login from "./TC_002_2.3_Login_pass";
login();
describe("Challenge Page", () => {
	it("Challenge Page", () => {
		cy.get("#dLabel").click();
		cy.contains("Challenges & rewards").click();
		cy.wait(4000);

		for (let i = 8; i < 16; i++) {
			let count = 1200 + i;
			cy.get(`[data-testid=challenge-item-${count}]`).click();
			cy.wait(1000);
			cy.get('[data-testid="back-to-challenges"] > .button-ghost').click();
			cy.wait(1000);
		}
	});
});
