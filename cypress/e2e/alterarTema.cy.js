describe('Quadro Kanban', () => {

  it('Altera Tema de escuro/claro do site', () => {

    // Visita a Url ao site
    cy.visit('https://kanban-dusky-five.vercel.app/');

    // Clica no botão de alterar tema
    cy.get("div.react-switch-bg").click()

  })
})