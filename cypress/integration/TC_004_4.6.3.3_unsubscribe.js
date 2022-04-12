/// <reference types="cypress" />

import login from "./TC_002_2.3_Login_pass";
login();
describe("Unsubscribe to newsletter", () => {
	it("Unsubscribe to newsletter", () => {
		cy.get('[data-testid="account-link-authenticated"]').click();
		cy.contains("Help center").click();
		cy.wait(10000);
		cy.get(".alan-container > iframe").then(($iframe) => {
			let num = Math.floor(Math.random() * 5);
			const $body = $iframe.contents().find("body");
			cy.wrap($body).find("nav").contains("My Account").click();
			cy.wait(2000);
			cy.wrap($body).find("nav").contains("Unsubscribe to newsletter").click();
			cy.wait(2000);
			cy.wrap($body).find("button").contains("Yes, I got my answer").click();
			cy.wait(2000);
			cy.wrap($body).find("button").eq(num).click();
			cy.wrap($body).find("button").contains("Submit").click();
			cy.wait(2000);
			cy.wrap($body).find("button").contains("Keep Navigating").click();
		});
	});
});
