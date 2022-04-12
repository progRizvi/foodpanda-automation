/// <reference types="Cypress" />

import login from "./TC_002_2.3_Login_pass";

login();
describe("Vouchers page", () => {
	it("Vouchers page", () => {
		cy.get("#dLabel").click();
		cy.get("ul").find("a").contains("Vouchers").click();
		cy.wait(4000);
	});
});
