/// <reference types="cypress" />

import login from "./TC_002_2.3_Login_pass";

login();
describe("Get help with my order", () => {
	it("Help Center", () => {
		cy.get('[data-testid="account-link-authenticated"]').click();
		cy.contains("Help center").click();
		cy.wait(10000);
		cy.get(".alan-container > iframe").then(($iframe) => {
			const $body = $iframe.contents().find("body");
			cy.wrap($body).find("nav").eq(0).click();
		});
		cy.get(".alan-container > iframe").then(($iframe) => {
			const $body = $iframe.contents().find("body");
			cy.wrap($body).find("li").eq(2).click();
		});
		cy.wait(3000);
		cy.get(".alan-container > iframe").then(($iframe) => {
			const $body = $iframe.contents().find("body");
			cy.wrap($body).find("button").click();
		});
		cy.wait(2000);
	});
});
