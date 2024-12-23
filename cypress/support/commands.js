Cypress.Commands.add('SearchItem', function () {

    // Localize a barra de busca e procure pelo item
    cy.get('#mobileSearch > .roboto-medium') 
      .wait(2000)
      .type('HP CHROMEBOOK{enter}'); 

    // Clique no primeiro produto listado
    
    cy.get('#\x39 ') 
      .wait(2000)
      .first()
      .click();

})

Cypress.Commands.add('AddItemToCart', function () {

    // Adicione o produto ao carrinho
    cy.get('.fixedBtn > .roboto-medium')
      .wait(2000)
      .click();

})

Cypress.Commands.add('VerifyCart', function () {

    cy.get('#shoppingCartLink')
      .wait(2000) 
      .click();

      cy.get('tr.ng-scope > :nth-child(2) > .roboto-regular')
      .wait(2000)
      .should('contain.text', 'HP CHROMEBOOK 14');
      
    
}); 


