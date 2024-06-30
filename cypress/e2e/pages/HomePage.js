class HomePage {

    elements = {
        homepageButoon : () => cy.get('img[src="assets/img/svg/logo.svg"]'),
        parcelPageButton : () => cy.get('a[href="/tracking/parcel"]').eq(0),
        brachesPageButton : () => cy.get('a[href="/tracking/branches"]').eq(0),
        rulesPageButton : () => cy.get('a[href="/tracking/rules"]').eq(0),
        tariffsPageButton : () => cy.get('a[href="/tracking/tariffs"]').eq(0),
        // languageSwitcherButton : () => cy.get('div').should('have.class', 'lang-switcher').get('mat-icon').contains('expand_more'),
        languageSwitcherButton : () => cy.get('mat-icon').contains('expand_more'),
        registrationButton : () => cy.get('button.reg-button span').eq(1),
        supportServiceButton : () => cy.get('a[href="https://t.me/rzdelivery_bot"]').should('have.attr', 'class', 'icon-link'),
        helpCenterButton : () => cy.get('a[href="https://help.rozetka.delivery/"]'),
        storeIosButton : () => cy.get(''),
        storeAndroidButton : () => cy.get(''),
        parcelNumberField : () => cy.get('#mat-input-0'),
        parcelTrackButton : () => cy.get('.send-form--group > .mdc-button > .mdc-button__label'),
        signUpButton : () => cy.get('button.button-reg span').eq(2),
        moreDetailsButton : () => cy.get('class="mat-mdc-button-persistent-ripple mdc-button__ripple"')
    }

    visit() {
        cy.visit('/');
    }

    trackParcel() {
        this.elements.parcelNumberField()
                     .should('be.visible')
                     .click({force: true})
                     .type('1234567890123{enter}'); 
        // this.elements.parcelTrackButton().click();

    }

    supportServiceClick() {
        this.elements.supportServiceButton()
                     .should('be.visible')
                     .invoke('removeAttr', 'target') // Open link in current browser tab
                     .click({force: true})
                     cy.title().should('eq', 'Telegram: Contact @rzdelivery_bot')
    }

    languageSwitcherClick() {
        this.elements.languageSwitcherButton()
                    //  .should('be.visible')
                     .click({force: true})
    }

}
module.exports = new HomePage();
