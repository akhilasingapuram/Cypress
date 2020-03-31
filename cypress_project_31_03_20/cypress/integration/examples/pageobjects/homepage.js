class homepage {
    get_Home() {
        return cy.get('a[data-test="home"]')
    }
    get_signin() {
        return cy.get('#sign-in')
    }
    get_addresses() {
        return cy.get('a[data-test="addresses"]')
    }
    get_new_address() {
        return cy.get('a[data-test="create"]')
    }
    get_sign_out(){
        return cy.get('a[data-test="sign-out"]')
    }

}


export default homepage;