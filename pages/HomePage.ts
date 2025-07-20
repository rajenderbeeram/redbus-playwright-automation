import { Page } from '@playwright/test';
import { getNextSaturday } from '../utils/dateHelper';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.redbus.in/');
  }
async searchRoute(source: string, destination: string) {
  await this.page.goto('https://www.redbus.in');
  await this.page.locator('//div[contains(text(), "From")]').click();
  await this.page.waitForTimeout(2000);
  await this.page.keyboard.type(source);
  await this.page.waitForTimeout(2000);
  await this.page.locator('//div[@class="listHeader___40b031"]').first().click();
  await this.page.waitForTimeout(2000);
  await this.page.keyboard.type(destination);
  await this.page.waitForTimeout(2000);
  await this.page.locator('//div[@class="listHeader___40b031"]').first().click();
 // 1. Click calendar icon
await this.page.locator('//span[@class="doj___21b4b7"]').click();
// 3. Find actual date for next Saturday
const today = new Date();
const nextSaturday = new Date();
nextSaturday.setDate(today.getDate() + ((6 - today.getDay() + 7) % 7 || 7));
const nextSatDate = nextSaturday.getDate().toString(); // e.g., "27"
// 4. Click on the date cell with that number (not selected-following)
await this.page.locator(`//li[not(contains(@class,'disabled'))]//span[text()="${nextSatDate}"]`).first().click();
}

  async clickSearchBuses() {
  await this.page.getByRole('button', { name: /search buses/i }).click();
  }
}