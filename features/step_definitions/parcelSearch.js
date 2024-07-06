
import testData from "../../fixtures/test_data.json";
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import parcelPage from "../../e2e/pages/ParcelPage";

When("I visit parcel page", () => {
 parcelPage.visit();
});
