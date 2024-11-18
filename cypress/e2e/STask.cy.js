/// <reference types ="cypress" />

describe('Selectors Task', () => {
  it('should select elements correctly', () => {
    cy.visit('https://demo.productionready.io/#/register');

    cy.get('a.navbar-brand'); // conduit logo in the top left corner

    cy.contains('ul.nav a', 'Home'); // Selects home in the top.

    cy.contains('ul.nav a', 'Sign up'); // select sign up in the top


   
    cy.get('h1.text-xs-center'); // Main heading  Sign up


     cy.contains('Have an account?'); //Select the "Have an account?" link 

    
    cy.get('input[placeholder="Username"]'); // Username input field


    cy.get('input[placeholder="Email"]'); // Email input field

  
    cy.get('input[placeholder="Password"]'); // Password input field

    cy.contains('button', 'Sign up'); // Green "Sign up" button

    
    cy.contains('footer a', 'conduit'); // conduit logo in the footer

   
    cy.get('footer span'); // License info in the footer
  });
});
