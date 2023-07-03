import { Category } from "../POM/Category";

const category = new Category()


describe('Category page test', () => {
    beforeEach(()=>{
      cy.login('johnnybravo@gmail.com', 'johnny123456')
    })
    it('Categories' ,()=>{
        cy.loginSession;
        category.OpenWomenCategory()
        cy.wait(2000)        
        category.OpenDress()
        cy.wait(2000)
        category.OpenWomenCategory()
        cy.wait(2000)
        category.OpenTops()
        cy.wait(2000)
        category.OpenWomenCategory()
        cy.wait(2000)
        category.OpenSaree()
        cy.wait(2000) 
        category.OpenMenCategory()
        cy.wait(2000)
        category.OpenTshirts()
        cy.wait(2000)
        category.OpenMenCategory()
        cy.wait(2000)
        category.OpenJeans()
        cy.wait(2000)
        category.OpenKidsCategory()
        cy.wait(2000)
        category.OpenKidsDress()
        cy.wait(2000)
        category.OpenKidsCategory()
        cy.wait(2000)
        category.OpenKidsTopsShirts()
        cy.wait(2000)
    })
})