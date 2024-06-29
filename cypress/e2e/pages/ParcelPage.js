class ParcelPage {

    elements = {
        parcelNumberField : () => cy.get('#mat-input-0'),
        parcelTrackButton : () => cy.get('.send-form--group > .mdc-button > .mdc-button__label'),
        clearButton : () => cy.get('button[type="button"] span').eq(1),
        copyPercelNumberButton : () => cy.get('app-copy-content'),
        clearParcelFieldButton : () => cy.get('.but-input-clear > .mat-mdc-focus-indicator'),
        infoMessageIcon : () => cy.get('[data-mat-icon-name="info"]'),
        snackBarChecklIcon : () => cy.get('[data-mat-icon-name="check_circle"]'),
        snackBarCancelIcon : () => cy.get('[data-mat-icon-name="cancel"]')
    }

    visit() {
        cy.visit('/tracking/parcel');
    }

    fillParcelNumber(parcelNumber) {
        this.elements.parcelNumberField()
                     .should('be.visible')
                     .click()
                     .type(parcelNumber);
    }

    copyParcelNumber() {
        this.elements.copyPercelNumberButton()
                     .should('be.visible')
                     .click();
    }

    parcelNumberCopySuccessBar() {
        this.elements.snackBarChecklIcon()
                     .should('be.visible')
                     .then(() => {
                        cy.log('Parcel number successfully coppied icon on snack-bar is displayed');
                    })                
    }

    parcelNotFoundBar() {
        this.elements.snackBarCancelIcon()
                     .should('be.visible')
                     .then(() => {
                        cy.log('Parcel not found error icon on snack-bar is displayed');
                    })          
    }

    parcelNotFoundMessageIcon() {
        this.elements.infoMessageIcon()
                     .should('be.visible')
                     .then(() => {
                        cy.log('Parcel not found info icon in message is displayed');
                    })          
    }

}
module.exports = new ParcelPage();