import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { HomePage } from '../pages/HomePage';
import { ResultsPage } from '../pages/ResultsPage';
import { SeatSelectionPage } from '../pages/SeatSelectionPage';
import { PassengerDetailsPage } from '../pages/PassengerDetailsPage';
import { PaymentPage } from '../pages/PaymentPage';



Given('I launch the RedBus website', async function (this: CustomWorld) {
  const homePage = new HomePage(this.page);
  await homePage.goto();
});


When('I search buses from {string} to {string} for this Saturday', { timeout: 30000 },async function (this: CustomWorld, source: string, destination: string) {
  const homePage = new HomePage(this.page);
  await homePage.searchRoute(source, destination);
});

When('I click on {string}',{ timeout: 20000 }, async function (this: CustomWorld, text: string) {
  const homePage = new HomePage(this.page);
  await homePage.clickSearchBuses();
});

When('I apply filters: {string}, {string}, and {string}',  { timeout: 20000 }, async function (this: CustomWorld, f1: string, f2: string, f3: string) {
  const resultsPage = new ResultsPage(this.page);
  await resultsPage.applyFilters([f1, f2, f3]);
});

When('I scroll and select the bus with the cheapest fare', { timeout: 20000 }, async function (this: CustomWorld) {
  const resultsPage = new ResultsPage(this.page);
  await resultsPage.selectCheapestBus();
});

When('I select a seat and boarding & dropping points', { timeout: 20000 }, async function (this: CustomWorld) {
  const seatPage = new SeatSelectionPage(this.page);
  await seatPage.selectSeatAndPoints();
});

When('I fill contact and passenger details and opt for insurance', { timeout: 20000 }, async function (this: CustomWorld) {
  const passengerPage = new PassengerDetailsPage(this.page);
  await passengerPage.enterPassengerDetails();
});

When('I proceed with UPI payment using ID {string}', { timeout: 20000 }, async function (this: CustomWorld, upiId: string) {
  const paymentPage = new PaymentPage(this.page);
  await paymentPage.payUsingUPI(upiId);
});

Then('I should see UPI payment confirmation or success page',{ timeout: 20000 }, async function (this: CustomWorld) {
  const paymentPage = new PaymentPage(this.page);
  await paymentPage.verifyPaymentPage();
});
