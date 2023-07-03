export class Logout {
    Logout(){
        cy.get('.shop-menu > .nav > :nth-child(4) > a')
        .click()
    }
}