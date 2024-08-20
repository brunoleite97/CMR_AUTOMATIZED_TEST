/// <reference types="cypress" />

Cypress.Commands.add('gui_register', (name, email, password, cowntry) => {
    cy.contains('Cadastre-se', { timeout: 10000 }).should('be.visible');
    cy.get('#signup_name').type(name);
    cy.get('#signup_email').type(email);
    cy.get('#signup_password').type(password);
    cy.get('.ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').type(cowntry).click();
    cy.contains('Registrar').click();
})

Cypress.Commands.add('gui_login', (email, password) => {
    cy.wait(1000);
    cy.get('#normal_login_email').click().type(email);
    cy.get('#normal_login_password').type(password);
    cy.get('.ant-btn').click();
    cy.contains('Painel de controle', { timeout: 10000 }).should('be.visible');
})