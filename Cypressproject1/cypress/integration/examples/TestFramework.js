// <reference types="cypress" />

import HomePage from "./pageObjects/Homepage"


describe('my fourth test suite', function () {
    before(function () {
        //runs once before all tests in the block
        cy.fixture('example').then(function (data) {
            this.data = data
        })

    })
    it('my fourth test', function () {
        const hp =new HomePage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        hp.getEditedBox().type(this.data.name)
        hp.getgender().select(this.data.gender)
        hp.getTwowaydatabiding().should('have.value',this.data.name)
        // hp.getEntrepreneur().should('have.attr','minlength','2')
        hp.getEntrepreneur().should('be.disabled')
        hp.getshoptab().click()
        // cy.get('h4.card-title').each(($el, index, $list) => {
        //     if($el.text().includes('Samsung Note 8'))
        //     {
        //         cy.get('button.btn.btn-info').eq(index).click()

        //     }


        // })
        cy.Product(this.data.productname)


        

        cy.get("a[class*='btn-primary']").click()
        cy.get("button[class*='btn-danger']").click()
        cy.get("td[class='text-right']>h3>strong").should('have.text','₹. 0')
        cy.get("button[class*='btn-default']").click()
        cy.get("a[href$='angularpractice']").click()





    })
})

