export class Category{

    OpenWomenCategory(){
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa')
        .click()
    }
    OpenDress(){
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a')
        .click()
    }
    OpenTops(){
        cy.get('#Women > .panel-body > ul > :nth-child(2) > a')
        .click()
    }
    OpenSaree(){
        cy.get('.panel-body > ul > :nth-child(3) > a')
        .click()
    }
    OpenMenCategory(){
        cy.get(':nth-child(2) > .panel-heading > .panel-title > a')
        .click()
    }
    OpenTshirts(){
        cy.get('#Men > .panel-body > ul > :nth-child(1) > a')
        .click()
    }
    OpenJeans(){
        cy.get('#Men > .panel-body > ul > :nth-child(2) > a')
        .click()
    }
    OpenKidsCategory(){
        cy.get(':nth-child(3) > .panel-heading > .panel-title > a')
        .click()
    }
    OpenKidsDress(){
        cy.get('#Kids > .panel-body > ul > :nth-child(1) > a')
        .click()
    }
    OpenKidsTopsShirts(){
        cy.get('#Kids > .panel-body > ul > :nth-child(2) > a')
        .click()
    }

}