/// <reference types = "Cypress" />

// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://next.privat24.ua/')
//   })
// })

// it('By ID', () => {
//   cy.visit('http://www.facebook.com/')
//   cy.get('#email')
// });

// it('By Class', () => {
//   cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
//   cy.get('.ds-input')
// });

// it('By Tag', () => {
//   cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
//   cy.get('nav')
// });

// it.only('By Tag value', () => {
//   cy.visit('http://www.facebook.com/')
//   cy.get('[name="pass"]')
// });

// it.only('By Different Tag', () => {
//   cy.visit('http://www.facebook.com/')
//   cy.get('[data-testid="open-registration-form-button"][role="button"]')
// });

// it.only('By Different Types', () => {
//   cy.visit('http://www.facebook.com/')
//   cy.get('button[type="submit"][name="login"]')
// });

// it.only('By Contains Name', () => {
//   cy.visit('https://next.privat24.ua/')
//   cy.get('*[class^="card"]')
// });


it.only('Using Get with Find and Eq', () => {
  cy.visit('https://next.privat24.ua/deposit/open/')
  cy.get('tbody').find('td').find('div').find('button').eq('0')
});

it.only('Using Get with Find and Eq', () => {
  cy.viewport(1800, 700)
  cy.visit('https://docs.cypress.io/api/commands/eq            .html#Syntax')
  cy.get('aside').find('div').find('ul').find('li').find('a').eq(0)
});