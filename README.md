
> **_NOTE:_** Проєкт створено з метою пригадати синтаксис фреймворку Cypress. Він не є максимально оптимізованим, та не включає всі можливі перевірки(у ролі авторизованого користувача, тощо), роботу з фреймами, генерація звітів, тощо. 


## Delivery Service Platform Testing

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Test Structure](#test-structure)
5. [Writing Tests](#writing-tests)
6. [Running Tests](#running-tests)
7. [Continuous Integration](#continuous-integration)
8. [Best Practices](#best-practices)
8. [To Do List](#to-do-list)

## Introduction

This project contains automated tests for the Delivery Service Platform using the Cypress framework. The aim is to ensure the reliability and functionality of the platform by performing comprehensive end-to-end testing.

## Installation

To set up the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone git@github.com:Key60ard/cy_rztk_delivery.git
   cd cy_rztk_delivery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Test Structure

The tests are organized following the Page Object Model (POM) for better maintainability and readability. The directory structure is as follows:

```
cypress/
  ├── fixtures/
  ├── e2e/integration/
  │    │  └── tests/
  │    └── pages/
  ├── plugins/
  ├── support/
      ├── commands.js
      ├── index.js

```

- `fixtures/`: Contains test data.
- `e2e/integration/`: Contains test specifications.
- `e2e/pages/`: Contains Page Object Models.
- `plugins/`: Custom plugins configuration.
- `support/`: Custom commands

### Writing Tests

Tests are written using the BDD approach, utilizing Cypress's built-in methods. Here’s a basic example of a test:

```javascript
import loginPage from "../pages/LoginPage";

describe('Login Tests', () => {
  const loginPage = new LoginPage();

  it('should successfully log in with valid credentials', () => {
    loginPage.visit();
    loginPage.fillEmail('user@example.com');
    loginPage.fillPassword('password123');
    loginPage.submit();
    cy.url().should('include', '/dashboard');
  });
});
```

### Running Tests

To run the tests, use the following commands:

1. Open Cypress Test Runner:
   ```bash
   npx cypress open
   ```

2. Run tests in headless mode:
   ```bash
   npx cypress run
   ```

## Continuous Integration

Integrate Cypress tests into your CI/CD pipeline to ensure tests run automatically on every commit or pull request. Here’s an example configuration for GitHub Actions:

```yaml
name: Cypress Tests

on: [push, pull_request]

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'
      - name: Install dependencies
        run: npm install
      - name: Run Cypress tests
        run: npx cypress run
```

## Best Practices

- **Organize tests by functionality and feature**.
- **Use Page Object Model (POM) for better code reuse and readability**.
- **Mock and stub network requests to isolate tests**.
- **Ensure tests are data-driven**.
- **Implement parallel test execution for faster feedback**.
- **Log all test steps and set up detailed reporting**.

---

## To-Do List

**Create Core Tests**
- [x] Write first tests.
    - [x] Write several tests on different pages of the application.
- [x] Implement Page Object Model (POM):
    - [x] Organize test code into page objects.
- [ ] Write functional tests:
    - [ ] Verify all main features and use cases.
    - [ ] Test user interfaces.
    - [ ] Test interactions and transitions between pages.
- [ ] Write regression tests:
    - [ ] Automate key use case scenarios to detect regressions after code changes.
- [ ] Write integration tests:
    - [ ] Test interactions between various components of the system.
    - [ ] Check integration with external services and APIs.

**Apply Techniques and Methodologies**
- [ ] Implement BDD (Behavior Driven Development):
    - [ ] Use libraries like Cucumber for writing tests.
- [ ] Use Mocking and Stubbing:
    - [ ] Use mocks and stubs to isolate the component being tested.
- [ ] Apply Data-Driven Testing:
    - [ ] Use various data sets to verify the same scenarios.

**Follow Best Practices**
- [ ] Organize test code:
    - [ ] Structure tests by levels (UI, integration, end-to-end).
    - [ ] Use descriptive names for tests and groupings.
- [ ] Ensure code cleanliness:
    - [ ] Follow DRY (Don't Repeat Yourself) principles.
    - [ ] Use comments to explain complex parts of tests.
- [ ] Set up reporting and logging:
    - [ ] Configure detailed test execution reports.
    - [ ] Log all test steps to simplify debugging.
- [ ] Configure parallel test execution:
    - [ ] Set up tests for parallel execution to speed up testing.
- [ ] Perform cross-browser testing:
    - [ ] Ensure compatibility with different browsers.
    - [ ] Use services like BrowserStack or Sauce Labs for cross-browser testing.
- [ ] Integrate tests into CI/CD pipelines:
    - [ ] Run tests automatically with every commit or pull request.

**Final Review**
- [ ] Review and refine tests for completeness and accuracy.
- [ ] Ensure all tests adhere to best practices and methodologies.