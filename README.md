PROJETO FINAL M4
Breve descrição do projeto: o que ele faz, qual problema resolver e para quem se destina.
Exemplo: "API para gerenciamento de produtos e avaliações de clientes, desenvolvida em Node.js seguindo o padrão MVC."

 Arquitetura MVC
Este projeto segue a arquitetura Model-View-Controller (MVC) :

Modelo : responsável pela comunicação com o banco de dados.
Ver : neste projeto, pode ser apenas uma resposta em JSON para o cliente.
Controlador : contém a lógica da aplicação e recebe as requisições.
Rotas : direcionam as requisições para os controladores corretos.
 Estrutura de pastas do projeto
 projeto-backend
 ┃ ┣  controllers   # Lógica das requisições
 ┃ ┣  models        # Estruturas e banco de dados
 ┃ ┣  routes        # Definição das rotas
 ┃ ┣  views         # (opcional) Renderização ou respostas
 ┃ ┗  app.js        # Arquivo principal
 ┣  package.json
 ┗  README.md
Tecnologias utilizadas
Node.js
Expressar
Nodemon (para desenvolvimento)
 Instalação e uso
Clonar o repositório
git clone https://github.com/dnlaie14/Projeto-M4.git
cd NOME-DO-PROJETO

npm install

npm run dev
Servidor rodando em http://localhost:3000/
 Rotas principais (exemplo)
Método    Rota    Descrição
PEGAR    /produtos    Lista de todos os produtos
PUBLICAR    /produtos    Criar um novo produto
COLOCAR    /produtos/:id    Atualizar produto por ID
EXCLUIR    /produtos/:id    Remover produto por ID
 Autores
Tábata Macedo
