/// <reference types="cypress"/>

describe('Accessibility testing', () => {
    beforeEach(() =>{
        cy.visit('/')
        cy.injectAxe()
    })

    it.only('should log any accessibility failures', () => {
        cy.checkA11y()
    })

    it('should exclude specific element on te page', () => {
        cy.checkA11y({ exclude: ['.header']})
    })

    it('should only test specific element on the page', () => {
        cy.checkA11y('.header')
    })

    it('should only include serious and critical impacts', () => {
        cy.checkA11y(null, { inludedImpacts: ['critical', 'serious']})
    })

    it('should exclude specific accessibility rules', () => {
        cy.checkA11y(null, {rules:{
            'color-contrast': { enabled: false}
        }})
    })
})