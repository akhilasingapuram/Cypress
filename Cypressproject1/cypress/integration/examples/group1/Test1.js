/// <reference types="cypress" />
describe('My First Test suite',function()
{
    it('My First Test case',function() {
        //test step

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //cy.get('.search-keyword')
        cy.get('.product:visible').should('have.length',4)
        //parent child chaining
        cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product').should('have.length',4)
        //cy.get('.products').find('.product').should('have.length',4)
        cy.get('.product').should('have.length',5)
        cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log('sf')
        })
        cy.get('@productlocator').find('.product').each(($el, index, $list) => {
            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                 $el.find('button').click()
                 //assert if logo text is currently displayed
                 cy.get('.brand').should('have.text','GREENKART')
                 //this is to print in logs
                 cy.get('.brand').then(function(logoelement)

                 {
                     cy.log(logoelement.text())
                     //const logo=cy.get('.brand').text()
                 })

                 

                 

            }
        })


    })
})


