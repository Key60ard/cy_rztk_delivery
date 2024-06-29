import testData from "../../fixtures/test_data.json"
import homePage from "../pages/HomePage"
import branchesPage from "../pages/BranchesPage"

/// <reference types="Cypress" />

describe('Branches Searching Tests', () => {

    it('User can open Department list of the city', () => {
        branchesPage.visit()
        branchesPage.openDepartureTab()
        branchesPage.openReceivingTab()
        branchesPage.clickChipsOdesa()
        branchesPage.clickDepartmentField()
        branchesPage.clickDepartmentListFirstItem()
    })

    it('User can Lay a road to Department in Receiving tab', () => {
        branchesPage.visit()
        branchesPage.openReceivingTab()
        branchesPage.clickChipsOdesa()
        branchesPage.clickDepartmentField()
        branchesPage.clickDepartmentListFirstItem()
        branchesPage.clickLayARoadButton()
    })

})