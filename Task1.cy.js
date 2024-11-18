/// <reference types = "cypress" />

describe('Selectors Task', () => {
    it('should select elements correctly', () => {
      cy.visit('https://demo.productionready.io/#/register');
  
     
      cy.get('a.navbar-brand[routerlink="/"]'); // Select the top left "conduit" logo
      cy.get('ul.nav li:last-child > a[href="#/register"]');  // // Select the sign up link in the top
      cy.get('a[href="#/"]'); // // Select the home link in the top
    

  
      
      cy.get('.text-xs-center'); // Selectmain sign up
  
     
      cy.get('p > a[href="#/login"]'); //Select the "Have an account?" link 
  
      
      cy.get(':input[placeholder="Username"]'); // Select the Username input field 
  
     
      cy.get('input[placeholder*="mail"]');  // Select the Email input field 
  
      
      cy.get('input[placeholder][type="password"]'); // Select the Password input field 
  
       
      cy.get('form button[type="submit"]'); // Select the green "Sign up" button
  
    
      cy.get('footer > div > span');   // Select the footer text  info 

      cy.get('footer a.navbar-brand'); // Selects the logo in the footer

      
    });
  });
  