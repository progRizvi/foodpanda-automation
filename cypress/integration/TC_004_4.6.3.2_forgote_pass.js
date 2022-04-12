/// <reference types="cypress" />

describe("Forget my password", () => {
	it("Forget Password", () => {
		cy.get('[data-testid="account-link-authenticated"]').click();
		cy.contains("Help center").click();
		cy.wait(10000);
		cy.get(".alan-container > iframe").then(($iframe) => {
			const num = Math.floor(Math.random() * 5);
			const $body = $iframe.contents().find("body");
			cy.wrap($body).find("nav").contains("My Account").click();
			cy.wait(2000);
			cy.wrap($body).find("nav").contains("Forgot my password").click();
			cy.wait(2000);
			cy.wrap($body)
				.find("ul")
				.eq(1)
				.scrollTo("bottom", { ensureScrollable: false });
			cy.wrap($body).find("button").contains("Yes, I got my answer").click();
			cy.wrap($body).find("button").eq(num).click();
			cy.wrap($body).find("button").contains("Submit").click();
			cy.wait(2000);
			cy.wrap($body).find("button").contains("Keep Navigating").click();
		});
	});
});
