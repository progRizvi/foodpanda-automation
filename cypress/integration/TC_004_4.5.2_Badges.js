/// <reference types="cypress" />

import login from "./TC_002_2.3_Login_pass";

login();
describe("Badges", () => {
	it("Badges", () => {
		cy.get("#dLabel").click();
		cy.contains("Challenges & rewards").click();
		cy.wait(4000);
		cy.contains("Badges").click();
		cy.wait(2000);
		cy.get(".grid>div").each(($el, index, $list) => {
			cy.wrap($el).find("a").click();
			cy.wait(2000);
			cy.get('[data-testid="rewards-progress-modal-close-btn"]').click();
		});
	});
});
