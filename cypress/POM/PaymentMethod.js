export class Payment{
    
    NameOnCard(name){
        cy.get('[data-qa="name-on-card"]')
        .type(name)
    }
    CardNumber(number){
        cy.get('[data-qa="card-number"]')
        .type(number)
    }
    CVC(cvc){
        cy.get('[data-qa="cvc"]')
        .type(cvc)
    }
    ExpirationMonth(month){
        cy.get('[data-qa="expiry-month"]')
        .type(month)
    }
    ExpirationYear(year){
        cy.get('[data-qa="expiry-year"]')
        .type(year)
    }
    PayAndConfirmOrder(){
        cy.get('[data-qa="pay-button"]')
        .click()
    }
    DownloadInvoice(){
        cy.get('.col-sm-9 > .btn-default')
        .click()
    }
    Continue(){
        cy.get('.shop-menu > .nav > :nth-child(1) > a')        
        .click()
    }
}