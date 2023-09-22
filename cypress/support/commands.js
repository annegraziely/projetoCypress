

 Cypress.Commands.add('getToken',(user,passwd)=>{
    cy.request({
        method:'POST',
        url:'https://serverest.dev/login',
        body:{
            "email": user,
            "password": passwd
        }
    }).its('body.authorization').should('not.be.empty')
        .then(authorization => {
            return authorization
        })


 })