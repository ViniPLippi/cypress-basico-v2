// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('input[name="firstName"]')
        .should('be.visible')
        .type('Vinicius')
        .should('have.value', 'Vinicius');

    cy.get('input[name="lastName"]')
        .should('be.visible')
        .type('Lippi')
        .should('have.value', 'Lippi');

    cy.get('input[type="email"]')
        .should('be.visible')
        .type('vinil@test.com')
        .should('have.value', 'vinil@test.com');

    cy.get('#product')
        .select('youtube')
        .should('have.value', 'youtube');

    cy.get('input[type="radio"]')
        .check('feedback')
        .should('be.checked')
        .and('have.value', 'feedback');

    cy.get('input[type="checkbox"]')
        .check()
        .should('be.checked')
        .last()
        .uncheck()
        .should('not.be.checked');

    cy.get('textarea[name="open-text-area"]')
        .should('be.visible')
        .type('AAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
        .should('have.value', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAA');

    //cy.get('button[type="submit"]').click();
})