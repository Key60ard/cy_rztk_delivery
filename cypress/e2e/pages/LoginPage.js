class LoginPage {

    elements = {
        phoneNumberField : () => cy.get('input[formcontrolname="phone"]'),
        passwordField : () => cy.get('input[data-test="passwordField"]'),
        phoheFieldError : () => cy.get('data-test="phone_error"'),
        phoheFieldPlaceholder : () => cy.get('placeholder="xx xxx xx xx"'),
        passwordFieldError : () => cy.get('id="mat-mdc-error-0"'),
        passwordVisibilityOnButton : () => cy.get('[data-mat-icon-name="visibility_on"]'),
        passwordVisibilityOffButton : () => cy.get('[data-mat-icon-name="visibility_off"]'),
        restorePasswordButton : () => cy.get('[data-test="restoreBtn"]'),
        enterButton : () => cy.get('[data-test="loginSubmitForm"]'),
        signUpButton : () => cy.get('data-test="toRegBtn"'),
        snackBarCancelIcon : () => cy.get('[data-mat-icon-name="cancel"]'),
        snackBarCloseIcon : () => cy.get('[data-mat-icon-name="close"]')
    }

    visit() {
        cy.visit('/auth/login');
    }

    fillPhoneNumber(phoneNumber) {
        this.elements.phoneNumberField()
                     .should('be.visible')
                     .click()
                     .type(phoneNumber);
    }

    fillPassword(password) {
        this.elements.passwordField()
                     .should('be.visible')
                     .click()
                     .type(password);
    }

    submit() {
        this.elements.enterButton()
                     .should('be.visible')
                     .then(() => {
                        cy.log('Enter button is displayed');
                    })
                     .click({force: true});
    }

    signIn(phoneNumber, password) {
        this.fillPhoneNumber(phoneNumber)
        this.fillPassword(password + '{enter}')
        // this.submit();
    }

    invalidCredentialBar(){
        this.elements.snackBarCancelIcon()
                     .should('be.visible')
                     .then(() => {
                        cy.log('Invalid credential error icon on snack-bar is displayed');
                    })
                     
    }

    getInvalidUserMessage(){
        this.elements.snackBarCancelIcon()
                     .should('be.visible')
                     .then(() => {
                        cy.log('Invalid credential error icon on snack-bar is displayed');
                    })
                     
    }

    enterButtonIsDisabled() {
        this.elements.enterButton()
                     .should('have.attr', 'disabled', 'disabled')
                     .then(() => {
                        cy.log('Enter button is Disabled');
                    })
                     
    }

    enterButtonIsEnabled() {
        this.elements.enterButton()
                     .should('not.have.attr', 'disabled')
                     .then(() => {
                        cy.log('Enter button is Enabled');
                    })
    }

    showPassword() {
        this.elements.passwordVisibilityOffButton()
                     .should('have.attr', 'fonticon', 'visibility_off')
                     .click({force: true})
    }

    hidePassword() {
        this.elements.passwordVisibilityOnButton()
                     .should('have.attr', 'fonticon', 'visibility')
                     .click({force: true})
    }
    clickRestorePasswordLink() {
        this.elements.restorePasswordButton()
                     .should('be.visible')
                     .click()
                     cy.url().should('include', '/auth/restore-password')
    }

}
module.exports = new LoginPage();