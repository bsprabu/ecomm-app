describe('Page Load  Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Filters')
    cy.contains('Server List')
  })
})

describe('RAM filter checkbox', () => {
  it('check the input', () => {
    cy.visit('/')
    cy.get(':nth-child(5) > .form-check-input').click({force:true});
    cy.contains('Server List')
  })
  // it('unscheck the input', () => {
  //   cy.visit('/')
  //   cy.get(':nth-child(5) > .form-check-input').uncheck({force:true});
  //   cy.contains('Server List')
  // })
})


