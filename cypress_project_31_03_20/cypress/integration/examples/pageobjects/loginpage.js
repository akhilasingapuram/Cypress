class loginpage {
    get_Email() {
        return cy.get('#session_email')
    }
    get_Password() {
        return cy.get('#session_password')
    }
    get_Signin() {
        return cy.get('input[data-test="submit"]')
    }
}
export default loginpage;
