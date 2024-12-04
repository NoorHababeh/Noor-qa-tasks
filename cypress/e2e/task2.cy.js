/// <reference types ="cypress" />

describe('Shopping Cart Update Test', () => {
    it('should update product quantities in the shopping cart', () => {
        cy.visit('https://magento.softwaretestingboard.com/');
        // Add a product to the cart
        cy.get('.product-item').first().find('.action.tocart').click();
        cy.contains('View and Edit Cart').click();

        // Update product quantity
        cy.get('.cart-item-qty').clear().type('2');
        cy.get('[title="Update Shopping Cart"]').click();

        
        cy.get('.message-success').should('contain', 'You updated your shopping cart.');
        cy.get('.subtotal .price').should('exist'); 
    });


        it('should allow a user to submit a product review', () => {
            cy.visit('https://magento.softwaretestingboard.com/');
            
            cy.get('.product-item').first().find('.product-item-link').click();
    
            // Write a review
            cy.get('.action.add').click(); 
            cy.get('#review_field').type('This is an amazing product!');
            cy.get('#summary_field').type('Great!');
            cy.get('#nickname_field').type('TestUser');
            cy.get('[title="Submit Review"]').click();
    
            // Assert review submission
            cy.get('.message-success').should('contain', 'You submitted your review for moderation.');
        });
});