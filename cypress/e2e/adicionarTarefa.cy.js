describe('Quadro Kanban', () => {

  it('Adicionar uma tarefa em uma Nova Lista', () => {

    // Visita a Url ao site
    cy.visit('https://kanban-dusky-five.vercel.app/');

    // Localiza o botão de AAdcionar Tarefa e clica nele
    cy.get('.custom-input').contains('Adicionar Tarefa').click()

    //Digita o nome da nova tarefa
    cy.get('input[type="text"]').type('Nova tarefa');

    // Clica em Adicionar nova lista
    cy.get('.btn').contains('Enviar').click()

    // Valida se uma Tarefa com o nome Nova Tarefa foi criada
    cy.contains('p', 'Nova tarefa').should('be.visible');
  })
})