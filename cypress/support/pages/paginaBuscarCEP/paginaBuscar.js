const el = require('./elements').ELEMENTS;

class Buscar {
    acessarPagina(){
        cy.visit('http://www.buscacep.correios.com.br');
    }
    preencherCampoPeloCEP(){
        cy.get('[name="endereco"]').type('69005-040');

    }
    preencherCampoPeloNome(){
        cy.get('[name="endereco"]').type('Lojas Bemol');
    }
    submeterBusca(){
        cy.get('[name="btn_pesquisar"]').click();
    }
}

export default new Buscar();