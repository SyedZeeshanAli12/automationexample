export class Cart{

    SearchForProducts(){
        cy.get('.shop-menu > .nav > :nth-child(2) > a')        
        .click()
    }
    ViewProduct(){
        cy.get(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a')        
        .click()
    }
    Quantity(quantity){
        cy.get('#quantity')
        .clear()
        .type(quantity)
    }
    AddToCart(){
        cy.get(':nth-child(5) > .btn')
        .click()
    }
    ViewCart(){
        cy.get('u')
        .click()
    }
    DeleteFromCart(){
        cy.get('.cart_quantity_delete')
        .click()
    }
    ViewAnotherProduct(){
        cy.get(':nth-child(26) > .product-image-wrapper > .choose > .nav > li > a')
        .click()
    }
    ReviewerName(name){
        cy.get('#name')
        .type(name)
    }
    ReviewerEmail(email){
        cy.get('#email')
        .type(email)
    }
    WriteReview(review){
        cy.get('#review')
        .type(review)
    }
    SubmitReview(){
        cy.get('#button-review')
        .click()
    }
    ProceedToCheckout(){
        cy.get('.col-sm-6 > .btn')
        .click()
    }
    CommentAboutOrder(message){
        cy.get('.form-control')
        .type(message)
    }
    PlaceOrder(){
        cy.get(':nth-child(7) > .btn')
        .click()
    }
    }

