import { Page, expect } from '@playwright/test';

export class DashboardPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async validateLogin() {
    await expect(this.page.locator('text=Welcome to Qubika Sports Club')).toBeVisible();
  }

  async goToCategories() {
    await this.page.click('text=Categories');
  }
}