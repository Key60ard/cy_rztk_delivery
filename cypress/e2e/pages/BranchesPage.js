class BranchesPage {

    elements = {
        departureTab : () => cy.get('span.mdc-tab__content').eq(0),
        receivingTab : () => cy.get('span.mdc-tab__text-label').eq(1),
        chipKyiv : () => cy.get('#mat-mdc-chip-64'),
        chipKharkiv : () => cy.get('#mat-mdc-chip-65'),
        chipOdesa : () => cy.get('span.mdc-evolution-chip__text-label').eq(2),
        chipLviv : () => cy.get('#mat-mdc-chip-69'),
        cityField : () => cy.get('mat-select[aria-disabled="false"] span'),
        departmentField : () => cy.get('span.mat-mdc-form-field-required-marker').eq(1),
        departmentListArrowIcon : () => cy.get('class="mat-mdc-select-arrow-wrapper').eq(1),
        departmentListFirstItem : () => cy.get('span.mdc-list-item__primary-text').eq(0),
        layARouteButton : () => cy.get('.map-popup--action > .but-outlined > .mat-mdc-focus-indicator')
    }

    visit() {
        cy.visit('/tracking/branches');
    }

    openDepartureTab() {
        this.elements.departureTab()
                     .should('be.visible')
                     .click();
    }

    openReceivingTab() {
        this.elements.receivingTab()
                     .should('be.visible')
                     .click();
    }

    clickCityField() {
        this.elements.cityField()
                     .should('be.visible')
                     .click();
    }
    
    clickDepartmentField() {
        this.elements.departmentField()
                     .should('be.visible')
                     .click();
    }

    clickChipsOdesa() {
        this.elements.chipOdesa()
                     .should('be.visible')
                     .click();
    }

    clickDepartmentListArrow() {
        this.elements.departmentListArrowIcon()
                     .should('be.visible')
                     .click();
    }

    clickDepartmentListFirstItem() {
        this.elements.departmentListFirstItem()
                     .should('be.visible')
                     .click();
    }

    clickLayARoadButton() {
        this.elements.layARouteButton()
                     .should('be.visible')
                     .click({force:true});
    }
}
module.exports = new BranchesPage();