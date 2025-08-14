describe('Quadro Kanban', () => {

  it('Editar Nome de Tarefa existente', () => {

    const lista = 'Nova Lista'; // nome da nova lista a ser criada
    const tarefa = 'Nova tarefa'; // nome da nova tarefa a ser criada
    const tarefaEditada = 'Tarefa Editada'; // nome após editar

    // Visita a Url ao site
    cy.visit('https://kanban-dusky-five.vercel.app/');

    // Cria lista e tarefa 
    cy.criarListaComTarefa([lista], [tarefa]);

    // Abre a tarefa
    cy.contains('p', tarefa).click();

    // Clica no título da tarefa para alterar
    cy.get('.custom-input').contains(tarefa).click();

    // Escreve o novo nome
    cy.get('input[type="text"]').type(tarefaEditada);

    // Clica no botão de confirmar a edição
    cy.get('.btn').contains('Editar Nome da task').click();

    // Valida se o nome foi alterado e o antigo sumiu
    cy.contains(tarefaEditada).should('be.visible');
    cy.contains(tarefa).should('not.exist');
  });
});
