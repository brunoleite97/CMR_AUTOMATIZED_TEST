/// <reference types="cypress" />

describe('register', () => {
  it('create account', () => {
    cy.fixture('user\\user.json').then((json) => {
      const url = Cypress.env('baseUrl');
      json.forEach((data, index) => {
        
        cy.visit(Cypress.env('baseUrl') + '/register');
        cy.viewport(1920, 1080);

        cy.gui_register(data.name, data.email, data.password, data.cowntry);

        cy.request(url)
          .then((response) => {
        expect(response.status).to.eq(200);
        });
      });
    });
  });
})