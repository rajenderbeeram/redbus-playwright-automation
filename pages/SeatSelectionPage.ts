import { Page } from '@playwright/test';

export class SeatSelectionPage {
  constructor(private page: Page) {}

  async selectSeatAndPoints() {
     await this.page.waitForTimeout(800);
//    await this.page.locator("//span[contains(@class,'sleeper__ind-seat')]"[2]).click();
    const sleeperSeat = this.page.locator("(//span[contains(@class,'sleeper__ind-seat')])[2]");
if (await sleeperSeat.isVisible()) {
  await sleeperSeat.click();
} else {
  await this.page.locator("//span[contains(@class,'seat__ind-seat')]").click();
}

     await this.page.waitForTimeout(800);
    await this.page.locator("//button[contains(text(),'Select boarding & dropping points')]").click();
     await this.page.waitForTimeout(800);
    await this.page.locator("//div[contains(@class,'bpdpSelection___69f41b')]").first().click();
     await this.page.waitForTimeout(800);
    await this.page.locator("(//div[contains(@class,'bpdpSelection___69f41b')][@data-id='0'])[2]").click();
  }
}