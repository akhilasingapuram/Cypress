class HomePage
{
    getEditedBox()
    {
       return cy.get('input[name= "name"]:nth-child(1)')
    }
    getgender()
    {
        return cy.get('select')
    }
    getTwowaydatabiding()
    {
        return cy.get(':nth-child(1) > .form-control')
    }
    getEntrepreneur()
    {
        return cy.get('#inlineRadio3')
    }
    getshoptab()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }
}

export default HomePage;