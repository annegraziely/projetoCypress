describe('Página de criação de usuário', () => {
    let token
    let id
    
    beforeEach(() => {
        cy.getToken('fulano@qa.com','teste')
            .then(tkn => {
                token = tkn
            })        
        
    })
        const date = Date.now()
      it('Criando um usuário', () => {
        cy.request({
           url:'https://serverest.dev/usuarios',
            method: 'POST',
            body: { 
                "nome": "Rosa",
                "email": date+'@gmail.com',
                "password": "teste",
                "administrador": "true"
            }      
        }).as('response')
        
        cy.get('@response').then(res => {
           id = res.body._id
           console.log(id)
           expect(res.status).to.be.equal(201)
           expect(res.body).to.have.property('message','Cadastro realizado com sucesso')


             })
        })

        it('Verificando usuário cadastrado', () => {
            cy.request({
                url:'https://serverest.dev/usuarios/'+id,
                method: 'GET',
                headers:{ accept: 'application/json'},
               
            }).as('response')
        cy.get('@response').then(res =>{
            expect(res.status).to.be.equal(200)

        })

        })


})