/// <reference types="cypress" />

describe('my third test suite', function ()
 {
    it('my third test', function () {
        //handling alerts
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //window:alert
        cy.on('window:alert',(str)=>
        {
            //mocha
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })
        //window:confirm
        cy.on('window:confirm',(str)=>
            {
                expect(str).to.equal("Hello , Are you sure you want to confirm?")
            })
            cy.get('#opentab').invoke('removeAttr','target').click()
            //navigating browsers controls using cypress
            //cy.url().should('include','rahulshettyacademy.com')
            //cy.go('back')



    })
})
