class addresspage{
    get_Firstname(){
        return cy.get('#address_first_name')
    }
    get_Lastname(){
        return cy.get('#address_last_name')
    }
    get_Address1(){
        return cy.get('#address_street_address')
    }
    get_Address2(){
        return cy.get('#address_secondary_address')
    }
    get_city(){
        return cy.get('#address_city')
    }
    get_state(){
        return cy.get('#address_state')
    }
    get_zipcode(){
        return cy.get('#address_zip_code')
    }
    get_address_country_us(){
        return cy.get('#address_country_us')
    }
    get_address_country_canada(){
        return cy.get('#address_country_canada')
    }
    get_Birthday(){
        return cy.get('#address_birthday')
    }
    get_address_age(){
        return cy.get('#address_age')
    }
    get_address_website(){
        return cy.get('#address_website')
    }
    get_address_Phone(){
        return cy.get('#address_phone')
    }
    get_address_climbing(){
        return cy.get('#address_interest_climb')
    }
    get_address_dancing(){
        return cy.get('#address_interest_dance')
    }
    get_address_reading(){
        return cy.get('#address_interest_read')
    }
    get_address_note(){
        return cy.get('#address_note')
    }
    get_address_submit(){
        return cy.get('input[data-test="submit"]')
    }
}

export default addresspage;