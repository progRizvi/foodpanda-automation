/// <reference types="cypress" />

import login from "./TC_002_2.3_Login_pass";

// login();

login();
describe("Update account info", () => {
	it("Update account info", () => {
		cy.get('[data-testid="account-link-authenticated"]').click();
		cy.contains("Help center").click();
		cy.wait(10000);
		cy.get(".alan-container > iframe").then(($iframe) => {
			const $body = $iframe.contents().find("body");
			cy.wrap($body).find("nav").contains("My Account").click();
		});
		cy.get(".alan-container > iframe").then(($iframe) => {
			const $body = $iframe.contents().find("body");
			cy.wrap($body).find("nav").contains("Update account information").click();
		});
		cy.get(".alan-container > iframe").then(($iframe) => {
			const $body = $iframe.contents().find("body");
			cy.wrap($body)
				.find("ul")
				.eq(1)
				.scrollTo("bottom", { ensureScrollable: false });
		});
		cy.get(".alan-container > iframe").then(($iframe) => {
			const $body = $iframe.contents().find("body");
			cy.wrap($body).find("button").contains("Yes, I got my answer").click();
		});
		cy.wait(2000);
		cy.get(".alan-container > iframe").then(($iframe) => {
			const $body = $iframe.contents().find("body");
			let num = Math.floor(Math.random() * 5);
			cy.wait(2000);
			cy.wrap($body).find("button").eq(num).click();
		});
		cy.wait(2000);
		cy.get(".alan-container > iframe").then(($iframe) => {
			const $body = $iframe.contents().find("body");
			cy.wrap($body).find("ul").scrollTo("bottom", { ensureScrollable: false });
		});
		cy.get(".alan-container > iframe").then(($iframe) => {
			const $body = $iframe.contents().find("body");
			cy.wrap($body).find("button").contains("Submit").click();
		});
		cy.wait(2000);
		cy.get(".alan-container > iframe").then(($iframe) => {
			const $body = $iframe.contents().find("body");
			cy.wrap($body).find("ul").scrollTo("bottom", { ensureScrollable: false });
			cy.wait(2000);
			cy.wrap($body).find("button").contains("Keep Navigating").click();
		});
	});
});
