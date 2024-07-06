
import testData from "../../fixtures/test_data.json";
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../e2e/pages/loginPage";

When("I visit login page", () => {
 loginPage.visit();
});


Then("I login as valid user", () => {
 loginPage.signIn(testData.VALID_PHONE_NUMBER, testData.VALID_PASSWORD);
});


Then("I login as user using the wrong password", () => {
 loginPage.loginToApp(testData.VALID_PHONE_NUMBER, testData.INVALID_PASSWORD);
});


Then("I should see successfully message", () => {
 loginPage.verifyLoginStatus(`Welcome, ${userName}!`);
});


Then("I should see an error message", () => {
 loginPage.verifyLoginStatus(testData.INVALID_PHONE_NUMBER, testData.INVALID_PASSWORD);
});
