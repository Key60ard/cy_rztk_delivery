
import testData from "../../cypress/fixtures/test_data.json";
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import parcelPage from "../../cypress/e2e/pages/ParcelPage";

When("I visit parcel page", () => {
 parcelPage.visit();
});
