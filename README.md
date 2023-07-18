# Aplicação React com Comunicação com API Java

Este é um projeto React que realiza a comunicação com uma API Java para exibir e pesquisar transferências. A aplicação é responsável por exibir uma tabela com as transferências, permitir a pesquisa por filtros e exibir o saldo total e o saldo no período das transferências.

## Passos para executar a aplicação

Siga os passos abaixo para executar a aplicação em seu ambiente local:
### Pré-requisitos

1. Node.js (versão 12 ou superior) instalado em sua máquina.
2. NPM (Node Package Manager) instalado em sua máquina.

## Clonar o repositório

Clone este repositório em sua máquina local usando o seguinte comando:

```bash
git clone https://github.com/marcondesjr96/supera-frontend.git
```

## Instalar as dependências

Navegue até o diretório do projeto clonado e execute o seguinte comando para instalar as dependências:

```bash
npm install
```

Este comando irá instalar todas as dependências necessárias para a aplicação, incluindo o pacote axios para realizar as requisições HTTP.

## Executar a aplicação

Após instalar as dependências e configurar a URL da API, execute o seguinte comando para iniciar a aplicação:

```bash
npm start
```

Este comando irá iniciar a aplicação React e abrirá automaticamente uma janela do navegador com a aplicação em execução. Se não abrir automaticamente, você pode acessar a aplicação pelo seguinte URL: http://localhost:3000.

Agora você poderá interagir com a aplicação, realizar pesquisas de transferências e visualizar os resultados na tabela.

![Exibição da tela](assets/telaReact.png)

Nesta tela, o usuário precisa passar o id da conta para habilitar o botão de pesquisa. Os Filtros como Data Inicio, Data fim e Nome do operador transacionado é opcional. Caso o usuário queira filtrar por algum desses campos, é só preencher e pesquisar!

## Considerações finais

Este é um exemplo básico de uma aplicação React que se comunica com uma API Java para exibir transferências. Sinta-se à vontade para personalizar e expandir essa aplicação de acordo com suas necessidades.
