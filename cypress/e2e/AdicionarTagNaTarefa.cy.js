describe('Quadro Kanban', () => {
    
  it('Adicionar uma Tag na Tarefa', () => {

    // Visita a Url ao site
    cy.visit('https://kanban-dusky-five.vercel.app/');

    const lista = 'Nova Lista' // nome da nova lista a ser criada
    const tarefa = 'Nova tarefa' // nome da nova lista a ser criada

    // Utilizo um comando customizado para criar lista e tarefa
    cy.criarListaComTarefa([lista], [tarefa])

    // Clica na tarefa
    cy.contains(tarefa).click()

    // Clica em Adicionar Tag
    cy.get('.custom-input').contains('Adicionar nova Tag').click()

    // Insere o nome da nova Tag
    cy.get('input[type="text"]').type('Nova Tag');

    // Confirma a criação
    cy.get('.btn').contains('Enviar').click()

    // Valida se a tag foi realmente adicionada
    cy.contains('label','Nova Tag').should('be.visible');
  })
})