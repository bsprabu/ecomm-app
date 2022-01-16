describe('Page Load  Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Filters')
    cy.contains('Server List')
  })
})

describe('Range Slider', () => {
  it('range slider minimum value', () => {     
    cy.wait(1000);
    cy.get('.ngx-slider-pointer-min').click({ multiple: true, force: true }).type('{rightarrow}{rightarrow}');
    cy.wait(1000);
    cy.get('.ngx-slider-pointer-max').click({ multiple: true, force: true }).type('{leftarrow}{leftarrow}')
  })  
})

describe('RAM filter checkbox', () => {
  it('check the checkbox', () => {
    cy.get(':nth-child(5) > .form-check-input').click({force:true});    
    cy.wait(1000);
  })
  it('uncheck the checkbox', () => {
    cy.get(':nth-child(5) > .form-check-input').uncheck({force:true});
    cy.wait(1000);
  })
  it('check the checkbox', () => {
    cy.get(':nth-child(10) > .form-check-input').click({force:true});    
    cy.wait(1000);
  })
  it('uncheck the checkbox', () => {
    cy.get(':nth-child(10) > .form-check-input').uncheck({force:true});
    cy.wait(1000);
  })
})

describe('HDD dropdown', () => {
  it('select the hard disk type', () => {
    cy.get('.form-select').select(1);
    cy.wait(1000);
    cy.get('.form-select').select(2);
  })
})


