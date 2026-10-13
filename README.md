# Automação E2E e API com Cypress — Advantage Online Shopping

Projeto de portfólio de QA demonstrando **testes end-to-end Web** e **validação de API REST** com Cypress na aplicação pública Advantage Online Shopping.

## 🎯 Objetivo

Demonstrar conhecimentos práticos de automação de testes com Cypress, cobrindo fluxo de usuário na interface Web e validações de API no mesmo projeto.

## 🧪 O que este projeto demonstra

- Automação E2E Web com Cypress
- Busca de produtos e validação de carrinho
- Testes de API REST com `cy.request()`
- Validação de status HTTP e conteúdo da resposta
- Uso de custom commands reutilizáveis
- Separação entre testes Web e API

## ✅ Cenários automatizados

### Web

- Buscar um produto
- Abrir os detalhes do produto
- Adicionar o produto ao carrinho
- Validar o produto esperado no carrinho

### API

- Pesquisar produto através da API de catálogo
- Validar status HTTP
- Validar categoria retornada
- Validar nome, ID e preço do produto

## 📁 Estrutura

```text
.
├── cypress/
│   ├── e2e/
│   │   ├── api/
│   │   │   └── search_product_api.cy.js
│   │   └── web/
│   │       └── FluxoCompleto.cy.js
│   ├── fixtures/
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
└── README.md
```

## ⚙️ Instalação

```bash
npm install
```

## ▶️ Executar todos os testes

```bash
npm test
```

## 🖥️ Abrir o Cypress interativamente

```bash
npm run cy:open
```

## 🔌 Executar apenas os testes de API

```bash
npm run test:api
```

## 🌐 Executar apenas os testes Web E2E

```bash
npm run test:web
```

## 🛠️ Tecnologias e competências

`Cypress` · `E2E Testing` · `API Testing` · `REST` · `JavaScript` · `Custom Commands` · `Assertions`

---

### English summary

QA portfolio project demonstrating web E2E automation and REST API testing with Cypress using a public demo application.
