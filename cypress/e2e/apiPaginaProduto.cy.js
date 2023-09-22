describe('Página de criação de Produto', () => {
   let token
   let id
    beforeEach(() => {
        cy.getToken('fulano@qa.com','teste')
            .then(tkn => {
                token = tkn
            })        
        
    })
    const date = Date.now()
    it('Criando um Produto', () => {
        cy.request({
            url:'https://serverest.dev/produtos',
            method:'POST',
            headers: {Authorization: token},
            body:{
                "nome": "Motor CAB"+date,
                "preco": 470,
                "descricao": "Mouse",
                "quantidade": 381
            }
        }).as('response')
        cy.get('@response').then(res => {
        id = res.body._id
        console.log(id)
        expect(res.status).to.be.equal(201)
        expect(res.body).to.have.property('message','Cadastro realizado com sucesso')
        })
    })

    it('Verificando produto cadastrado', () => {
        cy.request({
            url:'https://serverest.dev/produtos/'+id,
            method: 'GET',
            headers:{ accept: 'application/json'},
           
        }).as('response')
        cy.get('@response').then(res =>{
        expect(res.status).to.be.equal(200)

    })

})
        })
