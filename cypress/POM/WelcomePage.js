export class WelcomePage{
    
    carouseltest(){
        cy.get('#slider-carousel > .right')
        .click()
    }
    carouselbacktest(){
        cy.get('#slider-carousel > .left')
        .click()
    }
    OpenTestCases(){
        cy.get('.active > :nth-child(1) > .test_cases_list > .btn')
        .click()
    }
    OpenTestCase1(){
        cy.get(':nth-child(2) > .panel > .panel-heading > .panel-title > a > u')        
        .click()
    }
    LaunchBrowser(){
        cy.get(':nth-child(2) > .panel > .panel-heading > .panel-title > a > u')
        .click()
    }
    BackToHomePage(){
        cy.get('img')
        .click()
    }
    ApiList(){
        cy.get('.active > :nth-child(1) > .apis_list > .btn')
        .click()        
    }
    Api1(){
        cy.get(':nth-child(2) > .panel > .panel-heading > .panel-title > a > u')
        .click()
    }
    ApiUrl(){
        cy.get('#collapse1 > .list-group > :nth-child(1) > a')
        .click()
    }
    HomePage(){
        cy.get('img')
        .click()
    }
}