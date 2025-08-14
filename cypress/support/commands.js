// Comando para Criação de lista
Cypress.Commands.add('criarListasIniciais', (nomeLista) => {
  cy.visit('https://kanban-dusky-five.vercel.app/');

  // Pega um array para nomes de lista
  nomeLista.forEach(nome => {
    cy.get('.custom-input').contains('Adicionar outra lista').click();
    cy.get('input.sc-gsnTZi.irWJb').type(nome);
    cy.get('.btn').contains('Adicionar Lista').click();
  });
});



// Comando para criar um lista com tarefa
Cypress.Commands.add('criarListaComTarefa', ([nomeLista], [nomeTarefa]) => {

  // Visita o site 
  cy.visit('https://kanban-dusky-five.vercel.app/')

  // Cria lista
  cy.get('.custom-input').contains('Adicionar outra lista').click()
  cy.get('input[type="text"]').type(nomeLista)
  cy.get('.btn').contains('Adicionar Lista').click()

  // Cria tarefa na lista
  cy.contains('h1', nomeLista) 
    .parent() 
    .parent()
    .contains('Adicionar Tarefa') 
    .click()

  // Digita o nome da tarefa no campo de input que apareceu
  cy.get('input[type="text"]').type(nomeTarefa)
  
  // Clica no botão para confirmar a criação da tarefa
  cy.get('.btn').contains('Enviar').click()
});