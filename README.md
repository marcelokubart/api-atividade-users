# API de Usuários

Este projeto foi desenvolvido como parte da disciplina de API Development do MBA em Engenharia de Software da Faculdade Impacta. Trata-se de uma aplicação NestJS que implementa uma API RESTful para gerenciamento completo de usuários, demonstrando os conceitos e práticas aprendidos durante o curso.

## Funcionalidades

- Criar novos usuários
- Recuperar detalhes dos usuários
- Atualizar usuários existentes
- Excluir usuários
- Construído com NestJS

## Instalação

1. Clone o repositório:
   ```bash
   git clone <repository-url>
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd users-api
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## Executando a Aplicação

Para iniciar a aplicação, execute o seguinte comando:
```bash
npm run start
```

A aplicação estará rodando em `http://localhost:3000`.

## Endpoints da API

- `GET /users` - Recuperar todos os usuários
- `GET /users/:id` - Recuperar um usuário por ID
- `POST /users` - Criar um novo usuário
- `PUT /users/:id` - Atualizar um usuário existente
- `DELETE /users/:id` - Excluir um usuário

## Testes

Para executar os testes, use o seguinte comando:
```bash
npm run test
```

## Licença

Este projeto está licenciado sob a Licença MIT.

## Alunos
Marcelo Almeida Josef Kubart