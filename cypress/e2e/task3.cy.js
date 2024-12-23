describe('Print categories in New In Women\'s section', () => {
    it('Should print all categories in the New In Women\'s section', () => {
      // Visit the "What's New" page
      cy.visit('/whats-new.html');
  
      // Navigate to the "New In Women's" section
      cy.get('a').contains("New In Women's").click();
  
      
      cy.wait(2000);
  
      // Select and print all categories
      cy.get('.category-items a') // Replace with the actual CSS selector for the categories
        .each(($el) => {
        
          cy.log($el.text());
        });
    });
  });
  