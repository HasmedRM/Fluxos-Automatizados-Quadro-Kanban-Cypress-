describe('Quadro Kanban', () => {
    
  it('Excluir Tarefa existente', () => {

    // Visita a Url ao site
    cy.visit('https://kanban-dusky-five.vercel.app/');

    const lista = 'Nova Lista' // nome da nova lista a ser criada
    const tarefa = 'Nova tarefa' // nome da nova lista a ser criada

    cy.criarListaComTarefa([lista], [tarefa])

    cy.contains(tarefa)
    .parent() // Sobe para o elemento pai, no caso o cartão
    .find('svg.trash') // Encontra o ícone da lixeira dentro do cartão
    .click({ force: true }); // O force é utilizado pois o botão da lixeira não está visivel sem passar o mouse por cima
    
    // Verifica se a lista foi realmente removida
    cy.contains('p', tarefa).should('not.exist');
  })
})