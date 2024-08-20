/// <reference types="cypress" />

describe('Access', () => {
    it('login account', () => {
      cy.fixture('user.json').then((json) => {
        json.forEach((data, index) => {
          cy.visit(Cypress.env('baseUrl') + '/login');
          cy.viewport(1920, 1080);

          cy.gui_login(data.email, data.password);

          });
        });
    });
});