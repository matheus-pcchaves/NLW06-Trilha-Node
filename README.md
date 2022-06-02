# NLW Valoriza 

## Descrição:
Projeto Valoriza, desenvolvido durante a 6 edição da NLW.
Tem por objetivo conectar pessoas da mesma equipe por meio de tags e elogios

# Tecnologias:
[Node.js](https://nodejs.org/en/)__
[Express](https://expressjs.com/pt-br/)__
[JWT](https://jwt.io/)__
[Typescript](https://www.typescriptlang.org/)__
[Swagger](https://swagger.io/)__
[SQLite](https://www.sqlite.org/index.html)__

# Como executar o projeto:

## Clone o repositório

# Execute o comando yarn dev no terminal:

O servidor vai se iniciar na porta :3000. Acesse no seu navegador a URL http://localhost:3000/ + rotas GET. Obs: browsers só tem suporte para fazer requisições de método GET. Poderá utilizar ferramentas como insomnia para exxecutar requisições de outros métodos HTTP.


## Cadastro de usuários:
- Deve ser permitido cadastrar um novo usuário

- Não deve ser permitido cadastrar mais de um usuário com o mesmo email

- A senha do usuário deve ser criptografada

## Cadastro de tags:
- Não deve ser permitido cadastrar mais de uma tag com o mesmo nome

- Não deve ser permitido o cadastro por usuários que não sejam administradores

## Cadastro de elogios:
- Não deve ser permitido o cadastro por usuários que não estejam autenticados

- O usuário não poderá cadastrar um elogio para si próprio

## Autenticação de usuários:

- Deve ser permitida a autenticação

- Ao ser autenticado será gerado um token de autenticação