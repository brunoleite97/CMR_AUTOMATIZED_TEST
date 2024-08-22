/// <reference types="cypress" />

Cypress.Commands.add('gui_navi_client', () => {
    cy.xpath('//*[@id="root"]/div/aside/div/ul/li[2]/span[2]').click();
    cy.contains('Lista de clientes', { timeout: 10000 }).should('be.visible');
    cy.contains('Adicionar novo cliente').click();
})