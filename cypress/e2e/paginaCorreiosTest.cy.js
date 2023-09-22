import Busca from '../support/pages/paginaBuscarCEP/paginaBuscar'

describe('Página de Buscar CEP', () => {

    beforeEach(() => {
        Busca.acessarPagina();
  
  })
      it('Preencher campo buscar pelo CEP', () => {
        Busca.preencherCampoPeloCEP();
        Busca.submeterBusca();
        cy.contains('Rua Miranda Leão').should('be.visible')
      
        })
  
      it('Preencher campo buscar pelo Nome', () => {
        Busca.preencherCampoPeloNome();
        Busca.submeterBusca();
        cy.contains('Rua Miranda Leão').should('be.visible')
        })  
    })
  
    