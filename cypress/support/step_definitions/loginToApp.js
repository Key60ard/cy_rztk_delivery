
import testData from "../../e2e/fixtures/test_data";
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../e2e/integration/pages/loginPage";

When("I visit login page", () => {
 loginPage.visit();
});


Then("I login as valid user", () => {
 loginPage.loginToApp(userName, "pwd");
});


Then("I login as user using the wrong password", () => {
 loginPage.loginToApp(userName, "Errorpwd");
});


Then("I should see successfully message", () => {
 loginPage.verifyLoginStatus(`Welcome, ${userName}!`);
});


Then("I should see the invalid message", () => {
 loginPage.verifyLoginStatus("Invalid username/password");
});
