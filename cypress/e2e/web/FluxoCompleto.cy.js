describe('Teste', () => {
  
  it('Fluxo completo: Busca + Inclusão + validação ', () => {
    // Acesse a página inicial
    cy.visit('https://advantageonlineshopping.com/#/');

    cy.SearchItem()
    cy.AddItemToCart()
    cy.VerifyCart()
 
  });

})