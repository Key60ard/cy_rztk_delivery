class TariffsPage {

    elements = {
        tariffMpFileLink : () => cy.get('a').should('have.attr', 'href', 'https://s3-octopus.rozetka.ua/get/octopus/tariff-mp.pdf'),
        tariffOtherFileLink : () => cy.get('a').should('have.attr', 'href', 'https://s3-octopus.rozetka.ua/get/octopus/tariff-other.pdf'),
    }

    visit() {
        cy.visit('/tracking/tariffs');
    }

    clickOnDownloadMpFileLink() {
        this.elements.tariffMpFileLink()
                     .should('be.visible')
                     .click();
    }
    clickOnDownloadOtherFileLink() {
        this.elements.tariffOtherFileLink()
                     .should('be.visible')
                     .click();
    }
}

module.exports = new TariffsPage();