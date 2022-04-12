/// <reference types="cypress" />

describe("My support", () => {
	it("My support", () => {
		cy.get('[data-testid="account-link-authenticated"]').click();
		cy.contains("Help center").click();
		cy.wait(10000);
		cy.get(".alan-container > iframe").then(($iframe) => {
			const $body = $iframe.contents().find("body");
			cy.wrap($body).find("nav").eq(1).click();
		});
		cy.wait(3000);
		cy.get(".alan-container > iframe").then(($iframe) => {
			const $body = $iframe.contents().find("body");
			cy.wrap($body).find("button").click();
		});
		cy.wait(2000);
	});
});
