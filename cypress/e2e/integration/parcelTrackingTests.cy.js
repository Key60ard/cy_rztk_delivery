import testData from "../../fixtures/test_data.json"
import homePage from "../pages/HomePage"
import parcelPage from "../pages/ParcelPage"

/// <reference types="Cypress" />

describe('Tracking Parcels Tests', () => {

    it('Tracking parcel on a homepage', () => {
        homePage.visit()
        homePage.trackParcel()
    })

    it('Tracking valid parcel', () => {
        parcelPage.visit()
        parcelPage.fillParcelNumber(testData.VALID_PARCEL_NUMBER + '{enter}')
    })
    it('Copying parcel number from search result', () => {
        parcelPage.visit()
        parcelPage.fillParcelNumber(testData.VALID_PARCEL_NUMBER + '{enter}')
        parcelPage.copyParcelNumber()
        parcelPage.parcelNumberCopySuccessBar()
    })

    it('Tracking unexist parcel number', () => {
        parcelPage.visit()
        parcelPage.fillParcelNumber(testData.UNEXIST_PARCEL_NUMBER + '{enter}')
        parcelPage.parcelNotFoundMessageIcon()
        parcelPage.parcelNotFoundBar()
    })

    it('Should open Support Service Telegram chat-bot link', () => {
        homePage.visit()
        homePage.supportServiceClick()
    })

    it('', () => {
        homePage.visit()
        homePage.languageSwitcherClick()
    })

})