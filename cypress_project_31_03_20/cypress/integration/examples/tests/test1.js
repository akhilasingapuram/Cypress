// <reference types="cypress" />
import homepage from "../pageobjects/homepage"
import loginpage from "../pageobjects/loginpage"
import addresspage from "../pageobjects/addresspage"

describe('my first test suite', function () {
    before(function () {
        //runs once before all tests in the block
        cy.fixture('test1_data').then(function (data) {
            this.data = data
        })

    })
    it('my first test', function () {
        cy.visit('http://a.testaddressbook.com/')
        cy.on('uncaught:exception', (err) => {
            return false;
        });
        const hp = new homepage()
        hp.get_signin().click()

        const lp = new loginpage()
        lp.get_Email().type(this.data.username)
        lp.get_Password().type(this.data.password)
        lp.get_Signin().click()
        hp.get_addresses().click()
        hp.get_new_address().click()

        const ap = new addresspage()
        ap.get_Firstname().type(this.data.Firstname)
        ap.get_Lastname().type(this.data.Lastname)
        ap.get_Address1().type(this.data.Address1)
        ap.get_Address2().type(this.data.Address2)
        ap.get_city().type(this.data.city)
        ap.get_state().select(this.data.state)
        ap.get_zipcode().type(this.data.zipcode)
        ap.get_address_country_us().click()
        ap.get_address_age().type(this.data.address_age)
        ap.get_address_website().type(this.data.address_website)
        ap.get_address_Phone().type(this.data.address_phone)
        ap.get_address_reading().click()
        ap.get_address_note().type(this.data.address_note)
        ap.get_address_submit().click()
        hp.get_sign_out().click()






    })
})