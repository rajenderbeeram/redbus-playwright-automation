import { Page } from '@playwright/test';

export class ResultsPage {
  constructor(private page: Page) {}

  async applyFilters(filters: string[]) {
  for (const filter of filters) {
    switch (filter) {

      case "Primo":
      await this.page.waitForTimeout(800);  
        await this.page.locator("//div[contains(@class,'label') and contains(text(),'Primo Bus')]").click();
        break;

      case "Evening":
        await this.page.waitForTimeout(800);
        await this.page.locator("//div[contains(text(),'Departure time from source')]").click();
        await this.page.locator("//div[contains(text(),'Evening')]").first().click();
        break;

      case "Live Tracking":
        await this.page.waitForTimeout(800);
        await this.page.locator("//div[contains(text(),'Bus features')]").click();
        await this.page.locator("(//div[contains(text(),'Live Tracking')])[2]").click(); // keep as is if it works
        break;

      default:
        console.warn(`Unknown filter: ${filter}`);
    }
  }
}
async selectCheapestBus() {
  // Step 1: Click on the sort by price button (ascending)
  await this.page.waitForTimeout(500);
  await this.page.locator("//div[contains(text(),'Price')]").click();
  await this.page.waitForTimeout(1000); // wait for sorting to complete

  // Step 2: Click the first bus card (cheapest after sort)
  const firstCard = this.page.locator("(//li[contains(@class,'tupleWrapper___a09825')])[1]");
  await firstCard.scrollIntoViewIfNeeded();
  await this.page.waitForTimeout(500);
  await firstCard.click();
}


}