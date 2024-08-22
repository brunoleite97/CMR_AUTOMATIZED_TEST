/// <reference types="cypress" />

describe('New Client', () => {
    it('create new client', () => {
        cy.fixture('user\\user.json').then((login) => {
            login.forEach((login) => {
                cy.fixture('client\\client.json').then((json) => {
                    json.forEach((data) => {
                        cy.visit(Cypress.env('baseUrl') + '/login');
                        cy.viewport(1920, 1080);

                        cy.gui_login(login.email, login.password);

                        cy.gui_navi_client();

                        cy.wait(5000)
                    })
                })
            })
        })
    })
})