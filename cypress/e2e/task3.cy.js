describe('Print categories in New In Women\'s section', () => {
    it('Should print all categories in the New In Women\'s section', () => {
      // Visit the "What's New" page
      cy.visit('/whats-new.html');
  
      // Navigate to the "New In Women's" section
      cy.get('a').contains("New In Women's").click();
  
      // Wait for the categories to load (optional, based on performance)
      cy.wait(2000);
  
      // Select and print all categories
      cy.get('.category-items a') // Replace with the actual CSS selector for the categories
        .each(($el) => {
          // Log the category name to the console
          cy.log($el.text());
        });
    });
  });
  