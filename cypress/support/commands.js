Cypress.Commands.add('login', (username, password) => {
    cy.session("loginSession", () => {
      
      const url= 'https://www.automationexercise.com/'
      cy.visit(url);
      cy.wait(2000);
      cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
      cy.wait(2000);
      cy.get('[data-qa="login-email"]').type(username);
      cy.wait(1000);
      cy.get('[data-qa="login-password"]').type(password);
      cy.wait(1000);
      cy.get('[data-qa="login-button"]').click();
      cy.wait(2000);

    });
  });