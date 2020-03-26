// <reference types="cypress" />

describe('my third test suite', function ()
 {
    it('my third test', function () {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')

    })
})