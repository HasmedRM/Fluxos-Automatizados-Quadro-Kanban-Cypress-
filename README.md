# Automação de Testes para Quadro Kanban com Cypress
Este projeto contém uma suíte de testes automatizados de ponta a ponta (E2E) para a aplicação Quadro Kanban. Os testes foram desenvolvidos utilizando o framework Cypress.

## Funcionalidades Testadas
A suíte de testes tem os seguintes fluxos principais da aplicação:

Gerenciamento de Listas:

Criação de novas listas.

Exclusão de listas existentes.

Seleção de cores para listas.

Gerenciamento de Tarefas (Cartões):

Criação de novas tarefas dentro de uma lista específica.

Exclusão de tarefas.



## Validações:

Verifica se os itens são adicionados e removidos corretamente da interface.

## Tecnologias Utilizadas
Cypress: Framework principal para a automação dos testes E2E.

JavaScript: Linguagem de programação para a escrita dos testes.

Node.js: Ambiente de execução para o Cypress.


## Configuração do Ambiente
Para executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   
   git clone https://github.com/HasmedRM/Fluxos-Automatizados-Quadro-Kanban-Cypress-.git
   cd Fluxos-Automatizados-Quadro-Kanban-Cypress-

3. Instale as dependências:
Certifique-se de ter o Node.js e o npm instalados. Em seguida, execute o comando:

npm install

Este comando instalará o Cypress e todas as outras dependências listadas no arquivo package.json.

## Executando os Testes
Executei o teste desta forma:

Abrindo a interface do Cypress, permitindo que veja os testes sendo executados em tempo real e depure com muita facilidade.

npx cypress open

## Comandos Customizados
Criei alguns comando customizados para me ajudar na automatização de alguns fluxos e melhorar a legibilidade do código (localizado em cypress/support/commands.js):

Cria uma lista e uma tarefa com seus respectivos nomes escolhidos
cy.criarListaComTarefa([lista], [tarefa])

Cria uma nova lista com o nome [nome].

cy.criarListasIniciais([nome])


