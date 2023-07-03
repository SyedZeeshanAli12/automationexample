import { WelcomePage } from "../POM/WelcomePage";

const welcome = new WelcomePage()


describe('Welcome page test', () => {
    beforeEach(()=>{
      cy.login('johnnybravo@gmail.com', 'johnny123456')
    })
    it('Welcome Page' ,()=>{
        cy.loginSession;
        welcome.carouseltest()
        cy.wait(2000)
        welcome.carouselbacktest()
        cy.wait(2000)
        welcome.OpenTestCases()
        cy.wait(2000)
        welcome.OpenTestCase1()
        cy.wait(2000)
        welcome.LaunchBrowser()
        cy.wait(2000)
        welcome.BackToHomePage()
        cy.wait(2000)
        welcome.ApiList()
        cy.wait(2000)
        welcome.Api1()
        cy.wait(2000)
        welcome.ApiUrl()
        cy.wait(2000)
        welcome.HomePage()
            
    })
})