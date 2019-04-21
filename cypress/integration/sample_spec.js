describe('Is it working', () => {
  it('Cypress is working!', () => {
    expect(true).to.equal(true)
  })
})

describe('My First Test', function() {
  it('Visits the main site', function() {
    cy.visit('https://127.0.0.1')
  })

})