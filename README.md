# Cypress E2E & API Testing — Advantage Online Shopping

QA portfolio project demonstrating **web end-to-end testing** and **REST API validation** with Cypress against the Advantage Online Shopping demo application.

## What this project demonstrates

- Web E2E automation with Cypress
- Product search and shopping cart validation
- REST API testing with `cy.request()`
- HTTP status and response-body assertions
- Reusable Cypress custom commands
- Separation between web and API test suites

## Automated scenarios

### Web
- Search for a product
- Open the product details
- Add the product to the cart
- Validate the expected product in the cart

### API
- Search a product through the catalog API
- Validate HTTP status
- Validate returned category
- Validate product name, ID and price

## Project structure

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

## Install

```bash
npm install
```

## Run all tests

```bash
npm test
```

## Run Cypress interactively

```bash
npm run cy:open
```

## Run only API tests

```bash
npm run test:api
```

## Run only web E2E tests

```bash
npm run test:web
```

## QA skills highlighted

`Cypress` · `E2E Testing` · `API Testing` · `REST` · `JavaScript` · `Custom Commands` · `Assertions`

## Portfolio note

This repository is intended as a practical QA automation portfolio project using a public demo application.
