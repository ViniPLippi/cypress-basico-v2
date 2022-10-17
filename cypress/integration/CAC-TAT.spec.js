/// <reference types="Cypress" />


/* ------------------------------------------------------------Aula 0----------------------------------------------------------------/
describe('Central de Atendimento ao Cliente TAT', function() {
    it('verifica o título da aplicação', function() {
        cy.visit('./src/index.html');
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT');
    })
})

/ ----------------------------------------------------------------------------------------------------------------------------------*/

/* ------------------------------------------------------------Aula 1----------------------------------------------------------------/
describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() =>{
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    })
    it('preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('input[name="firstName"]')
            .should('be.visible')
            .type('Vinicius', {delay: 0})
            .should('have.value', 'Vinicius');

        cy.get('input[name="lastName"]')
            .should('be.visible')
            .type('Lippi')
            .should('have.value', 'Lippi');

        cy.get('input[type="email"]')
            .should('be.visible')
            .type('vinil@test.com')
            .should('have.value', 'vinil@test.com');

        cy.get('textarea[name="open-text-area"]')
            .should('be.visible')
            .type('AAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
            .should('have.value', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAA');

        cy.contains('button', 'Enviar').click();//cy.get('button[type="submit"]').click();

        cy.get('.success').should('be.visible');
    })

    it.only('exibe mensagem de erro ao submeter o formulário com um email com fortmatação inválida', function() {
        cy.get('input[name="firstName"]')
            .should('be.visible')
            .type('Vinicius', {delay: 0})
            .should('have.value', 'Vinicius');

        cy.get('input[name="lastName"]')
            .should('be.visible')
            .type('Lippi')
            .should('have.value', 'Lippi');

        cy.get('input[type="email"]')
            .should('be.visible')
            .type('viniltest.com');

        cy.get('textarea[name="open-text-area"]')
            .should('be.visible')
            .type('AAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
            .should('have.value', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAA');

        cy.get('button[type="submit"]').click();

        cy.get('.error').should('be.visible');
    })

    it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#phone-checkbox').click();

        cy.get('button[type="submit"]').click();

        cy.get('.error').should('be.visible');
    })

    it.only('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        cy.get('input[name="firstName"]')
            .should('be.visible')
            .type('Vinicius', {delay: 0})
            .should('have.value', 'Vinicius')
            .clear()
            .should('have.value', '');

        cy.get('input[name="lastName"]')
            .should('be.visible')
            .type('Lippi')
            .should('have.value', 'Lippi')
            .clear()
            .should('have.value', '');

        cy.get('input[type="email"]')
            .should('be.visible')
            .type('vinil@test.com')
            .should('have.value', 'vinil@test.com')
            .clear()
            .should('have.value', '');

        cy.get('textarea[name="open-text-area"]')
            .should('be.visible')
            .type('AAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
            .should('have.value', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
            .clear()
            .should('have.value', '');

        cy.get('button[type="submit"]').click();

        cy.get('.error').should('be.visible');
    })

    it.only('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.get('button[type="submit"]').click();

        cy.get('.error').should('be.visible');
    })

    it('envia o formulário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit();

        cy.get('.success').should('be.visible');
    })
})

/ ----------------------------------------------------------------------------------------------------------------------------------*/

/* ------------------------------------------------------------Aula 3----------------------------------------------------------------/

describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() =>{
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    })
    it('verifica o valor do seletor e envia o formulário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit();

        cy.get('#product')
            .select('youtube')
            .should('have.value', 'youtube');

        cy.get('button[type="submit"]').click();

        cy.get('.success').should('be.visible');
    })
})

/ ----------------------------------------------------------------------------------------------------------------------------------*/

/* ------------------------------------------------------------Aula 4----------------------------------------------------------------/

describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() =>{
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    })
    it('marca o tipo de atendimento "Feedback" e envia o formulário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit();

        cy.get('input[type="radio"]') // outr: cy.get('input[type="radio"] [value='feedback]').check().should('be.checked').and('have.value', 'feedback')
            .check('feedback')
            .should('be.checked')
            .and('have.value', 'feedback');

        cy.get('button[type="submit"]').click();

        cy.get('.success').should('be.visible');
    })
    it.only('marca cada tipo de atendimento', function(){
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(function($radio){
                cy.wrap($radio).check();
                cy.wrap($radio).should('be.checked');
            });
    })
})

/ ----------------------------------------------------------------------------------------------------------------------------------*/

/* ------------------------------------------------------------Aula 5----------------------------------------------------------------/

describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() =>{
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    })
    it('marca ambos os checkboxes, depois desmarca o ultimo e envia o formulário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit();

        cy.get('input[type="checkbox"]')
            .check()
            .should('be.checked')
            .last()
            .uncheck()
            .should('not.be.checked');

        cy.get('button[type="submit"]').click();

        cy.get('.success').should('be.visible');
    })
})

/ ----------------------------------------------------------------------------------------------------------------------------------*/

/* ------------------------------------------------------------Aula 6----------------------------------------------------------------/

describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() =>{
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    })
    it('seleciona um arquivo da pasta fixtures', function() {
        cy.fillMandatoryFieldsAndSubmit();

        cy.get('input[type=file]#file-upload')
            .selectFile('./cypress/fixtures/example.json')
            .should(function($input){
                expect($input[0].files[0].name).to.equal('example.json');
            });
    })

    it('seleciona um arquivo simulando um drag-and-drop', function() {
        cy.fillMandatoryFieldsAndSubmit();

        cy.get('input[type=file]#file-upload')
            .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
            .should(function($input){
                expect($input[0].files[0].name).to.equal('example.json');
            });
    })

    it('seleciona um arquivo utilizando uma fixture para qual foi dada um alias', function() {
        cy.fillMandatoryFieldsAndSubmit();

        cy.fixture('example.json').as('exemploFile')
        cy.get('input[type=file]#file-upload')
            .selectFile('@exemploFile')
            .should(function($input){
                expect($input[0].files[0].name).to.equal('example.json');
            });
    })
})

/ ----------------------------------------------------------------------------------------------------------------------------------*/

// ------------------------------------------------------------Aula 7----------------------------------------------------------------/

describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() =>{
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
        cy.get('#privacy a')
            .invoke('removeAttr', 'target')
            .click();

        cy.contains('Não salvamos dados').should('be.visible');
        cy.visit('./src/index.html');
    })

    it('desafio usando todas as funcionalidades aprendidadas', function() {
        cy.fillMandatoryFieldsAndSubmit();

        cy.get('button[type="submit"]').click();

        cy.get('.success').should('be.visible');
    })

    /*it.only('acessa a página da política de privacidade removendo o target e então clicando o link', function() {
        cy.get('#privacy a')
            .invoke('removeAttr', 'target')
            .click();

        cy.contains('Não salvamos dados').should('be.visible');
    })*/
})