import testData from "../../fixtures/test_data.json"
import homePage from "../pages/HomePage"
import branchesPage from "../pages/BranchesPage"

/// <reference types="Cypress" />

describe('Branches Searching Tests', () => {

    beforeEach(() => {
        branchesPage.visit()
      })

    it('User can open Departments list of the city', () => {
        branchesPage.openDepartureTab()
        branchesPage.openReceivingTab()
        branchesPage.clickChipsOdesa()
        branchesPage.clickDepartmentField()
        branchesPage.clickDepartmentListFirstItem()
    })

    it('User can Lay a road to Department in Receiving tab', () => {
        branchesPage.openReceivingTab()
        branchesPage.clickChipsOdesa()
        branchesPage.clickDepartmentField()
        branchesPage.clickDepartmentListFirstItem()
        branchesPage.clickLayARoadButton()
    })

})