class RestorePasswordPage {

    elements = {
        phoneNumberField : () => cy.get('form[data-test="restoreFormScreen"] mat-label', { timeout: 2000 }),
        submitButton : () => cy.get('data-test="submitRestore"'),
        backButton : () => cy.get('data-test="goToAuth"')

   }

    visit() {
        cy.visit('/auth/restore-password');
    }

    fillPhoneNumber(phoneNumber) {
        this.elements.phoneNumberField()
                     .click()
                     .type(phoneNumber);
    }

    submit() {
        this.elements.submitButton()
                     .should('be.visible')
                     .click();
    }

    restorePassword(phoneNumber) {
        this.elements.phoneNumberField()
                     .should('be.visible')
                     .click({force: true})
                     .type(phoneNumber + '{enter}');
    }
}
module.exports = new RestorePasswordPage();