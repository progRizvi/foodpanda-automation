/// <reference types="Cypress" />

describe("Open Profile", () => {
	it("Open Profile", () => {
		cy.get('[data-testid="account-link-authenticated"]').click();
		cy.wait(2000);
		cy.get("ul").contains("Profile").click();
		cy.wait(2000);
		cy.get("#contact-information-email").clear();
		cy.wait(2000);
		cy.get("#contact-information-email").type("rizvimail03@gmail.com");
		cy.wait(2000);
		cy.get("#contact-information-first-name").clear();
		cy.wait(2000);
		cy.get("#contact-information-first-name").type("Rizvi");
		cy.wait(2000);
		cy.get("#contact-information-last-name").clear();
		cy.wait(2000);
		cy.get("#contact-information-last-name").type("Ahmed");
		cy.wait(2000);
		cy.get("#contact-information-mobile-number").type("01710101010");
		cy.wait(2000);
		cy.get(".profile__blocks > :nth-child(1)").click();
		cy.wait(2000);
		cy.get("#contact-information-form > .pull-right").click();
		cy.wait(2000);
		cy.get(".modal-content > .modal-close-button").click();
	});
});
