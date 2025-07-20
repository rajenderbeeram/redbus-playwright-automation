import { Page } from '@playwright/test';

export class PassengerDetailsPage {
  constructor(private page: Page) {}

  async enterPassengerDetails() {
await this.page.fill("input[placeholder='Phone']", 'XXXXXXXXXX');
await this.page.fill("input[placeholder='Enter email id']", 'test@example.com');
await this.page.locator('input[id="0_201"]').click();
await this.page.locator('input[placeholder="Search for state"]').fill('Telangana');
await this.page.waitForTimeout(1000); 
await this.page.waitForSelector('div.listHeader___d239ee');

await this.page.locator('div.listHeader___d239ee', { hasText: 'Telangana' }).first().click();
    await this.page.fill("input[placeholder='Enter your Name']", 'Test User');
    await this.page.fill("input[placeholder='Enter Age']", '30');
    await this.page.waitForTimeout(800);
    await this.page.locator('div.toggleGroup___d1fc4b').first().click();
    await this.page.waitForTimeout(800);
    await this.page.locator('#insuranceConfirmText').click();
    await this.page.waitForTimeout(800);
   await this.page.locator("//button[contains(text(), 'Continue booking')]").click();

  }
}
