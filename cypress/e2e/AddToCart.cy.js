import { Cart} from "../POM/Cart";


const cart = new Cart()


describe('Add to Cart and Delete from Cart Test', () => {
    beforeEach(()=>{
      cy.login('johnnybravo@gmail.com', 'johnny123456')
    })
    it('cart page' ,()=>{
        cy.loginSession;
        cy.wait(2000)
        cart.SearchForProducts()
        cy.wait(2000)
        cart.ViewProduct()
        cy.wait(2000)
        cart.Quantity('3')
        cy.wait(2000)
        cart.AddToCart()
        cy.wait(2000)
        cart.ViewCart()
        cy.wait(2000)
        cart.DeleteFromCart()
        cy.wait(2000)        
    })
})