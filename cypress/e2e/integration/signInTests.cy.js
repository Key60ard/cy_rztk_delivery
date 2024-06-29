import homePage from "../pages/HomePage"
import restorePasswordPage from "../pages/RestorePasswordPage"
import loginPage from "../pages/LoginPage"
import testData from "../../fixtures/test_data.json"

/// <reference types="Cypress" />

describe('Sign In Tests', () => {

    it('User cannot log in with incorrect credentials', () => {
        loginPage.visit()
        loginPage.enterButtonIsDisabled()
        loginPage.signIn(testData.INVALID_PHONE_NUMBER, testData.INVALID_PASSWORD)
        loginPage.showPassword()
        loginPage.enterButtonIsEnabled()
        loginPage.invalidCredentialBar()
    })

    it('User can go to restore password page', () => {
        loginPage.visit()
        loginPage.enterButtonIsDisabled()
        loginPage.clickRestorePasswordLink()
    })

    it('Restore Password', () => {
        restorePasswordPage.visit()
        restorePasswordPage.fillPhoneNumber(testData.INVALID_PHONE_NUMBER)
    })
})