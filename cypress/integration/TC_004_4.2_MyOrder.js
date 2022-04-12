/// <reference types="cypress" />

import login from "./TC_002_2.3_Login_pass";

login();
describe("My Order", () => {
	it("My Order", () => {
		cy.get("#dLabel").click();
		cy.wait(4000);
		cy.get("ul").contains("Orders & reordering").click();
		cy.wait(4000);
	});
});
