class TariffsPage {

    elements = {
        tariff_mp_file_link : () => cy.get('button.button-reg span').eq(2),
        tariff_other_file_link : () => cy.get('button.button-reg span').eq(2)
    }

    visit() {
        cy.visit('/tracking/tariffs');
    }

    trackParcel() {
      
        this.elements.parcelNumberField()
                     .should('be.visible')
                     .click({force: true})
                     .type('1234567890123{enter}'); 
        // this.elements.parcelTrackButton().click();

    }
}

module.exports = new TariffsPage();
