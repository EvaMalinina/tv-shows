describe('Main Test', () => {
  it('Visits localhost', () => {
    cy.visit('http://localhost:8082/')
    cy.contains('I\'m link.').click()
    cy.contains('Stay tuned, IT world')
  })
})
