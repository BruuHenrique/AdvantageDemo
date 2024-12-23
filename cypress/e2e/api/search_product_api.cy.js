describe('API: Search Product', () => {
  it('should return the specific product based on the search query', () => {
    const searchQuery = 'HP Elite x2 1011 G1 Tablet'; // Termo de busca exato

    cy.request({
      method: 'GET',
      url: `https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=${encodeURIComponent(searchQuery)}`,
    }).then((response) => {
      // Valide o status da resposta
      expect(response.status).to.eq(200);

      // Exiba o conteúdo completo da resposta no log
      cy.log('Full Response Body:', JSON.stringify(response.body, null, 2));

      // Valide que a resposta contém apenas uma categoria com produtos
      expect(response.body).to.be.an('array').and.have.length(1);

      // Valide que a categoria retornada é "TABLETS"
      const category = response.body[0];
      expect(category.categoryName).to.eq('TABLETS');

      // Valide que existe apenas um produto na categoria
      expect(category.products).to.be.an('array').and.have.length(1);

      // Valide que o produto retornado corresponde ao esperado
      const product = category.products[0];
      expect(product.productName).to.eq('HP Elite x2 1011 G1 Tablet');
      expect(product.price).to.eq(1279); // Valide o preço, se necessário
      expect(product.productId).to.eq(17); // Valide o ID do produto, se necessário
      cy.log('Product Found:', JSON.stringify(product, null, 2));
    });
  });
});
