import { Page } from '@playwright/test';

export class PaymentPage {
  constructor(private page: Page) {}

  async payUsingUPI(upiId: string) {
//payment section
		await this.page.locator("//div[contains(text(),'Pay through UPI ID')]").click();
		await this.page.locator("//input[@class='inputField___e2a1dd   ']").fill(upiId);
	await this.page.locator("//button[@class='primaryButton___f9943b ']").click();
  }

  async verifyPaymentPage() {
    await this.page.waitForSelector('text=Payment Confirmation', { timeout: 10000 });
  }
}