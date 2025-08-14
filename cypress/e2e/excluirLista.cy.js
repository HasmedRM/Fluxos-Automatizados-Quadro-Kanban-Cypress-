describe('Quadro Kanban', () => {
    
  it('Excluir Lista existente', () => {

    // Visita a Url ao site
    cy.visit('https://kanban-dusky-five.vercel.app/');

    const nome = 'Nova Lista' // nome da nova lista a ser criada

    cy.criarListasIniciais([nome])

     cy.contains('h1', nome)
      .parent() // Sobe para o elemento pai
      .find('div.trash') // Encontra o botão da lixeira dessa lista criada para não apagar todas
      .click(); // Clica 

    // Verifica se a lista foi realmente removida
    cy.contains('h1', nome).should('not.exist');
  })
})