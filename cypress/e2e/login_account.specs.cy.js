/// <reference types="cypress" />

describe('Access', () => {
    it('login account', () => {
      cy.fixture('user\\user.json').then((json) => {
        json.forEach((data) => {
          cy.visit(Cypress.env('baseUrl') + '/login');
          cy.viewport(1920, 1080);

          cy.gui_login(data.email, data.password);

          });
        });
    });
});