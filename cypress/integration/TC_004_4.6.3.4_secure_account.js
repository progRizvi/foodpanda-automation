/// <reference types="cypress" />
import "cypress-file-upload";
import login from "./TC_002_2.3_Login_pass";

describe("Account security and protection", () => {
	it("Secure your account", () => {
		cy.get('[data-testid="account-link-authenticated"]').click();
		cy.contains("Help center").click();
		cy.wait(10000);
		cy.get(".alan-container > iframe").then(($iframe) => {
			const $body = $iframe.contents().find("body");
			cy.wrap($body).find("nav").contains("My Account").click();
			cy.wait(2000);
			cy.wrap($body)
				.find("nav")
				.contains("Account Security and Protection")
				.click();
			cy.wait(2000);
			cy.wrap($body).find("nav").contains("Secure your account").click();
			cy.wait(2000);
			cy.wrap($body)
				.find("form")
				.scrollTo("bottom", { ensureScrollable: false });
			cy.wrap($body)
				.find("textarea")
				.should("have.attr", "name", "description")
				.type("Test Messages write here. this will count dummy message.");
			cy.fixture("logo.jpg").as("logo");
			cy.wrap($body)
				.find("label.zkzM8")
				.should(
					"have.attr",
					"for",
					"image-upload-form-field-input-account|securityProtection|secureAccount|form-image_url"
				)
				.then((el) => {
					const blob = Cypress.Blob.base64StringToBlob(this.logo, "image/jpeg");
					const file = new File([blob], "logo.jpg", {
						type: "image/jpeg",
					});
					const data = new DataTransfer();
					data.items.add(file);
					el[0].files = data.files;
					const changeEvent = new Event("change", {
						bubbles: true,
					});
					el[0].dispatchEvent(changeEvent);
				});
			cy.wrap($body)
				.find("label.zkzM8")
				.should(
					"have.attr",
					"for",
					"image-upload-form-field-input-account|securityProtection|secureAccount|form-image_url"
				)
				.next()
				.next()
				.should("be.visible");
		});
	});
});
