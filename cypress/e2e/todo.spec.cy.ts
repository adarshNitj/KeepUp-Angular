describe('Testing todo component', () => {
    it('Visits the initial project page', () => {
      cy.visit('/dashboard')
      cy.url().should('includes', 'dashboard')
    })
  })