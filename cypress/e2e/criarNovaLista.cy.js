describe('Quadro Kanban', () => {

  it('Entra no site e adiciona uma lista', () => {

    // Visita a Url ao site
    cy.visit('https://kanban-dusky-five.vercel.app/');

    // Localiza o botão de Adicionar Outra Lista e clica nele
    cy.get('.custom-input').contains('Adicionar outra lista').click()

    //Digita o nome da nova lista
    cy.get('input.sc-gsnTZi.irWJb').type('Nova Lista');

    // Clica em Adicionar nova lista
    cy.get('.btn').contains('Adicionar Lista').click()

    // Confere se uma lista com o titulo Nova Lista foi criada
    cy.contains('h1', 'Nova Lista').should('be.visible');
  })
})