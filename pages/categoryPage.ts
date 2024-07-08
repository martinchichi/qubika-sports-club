import { Page, expect } from '@playwright/test';

export class CategoryPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async createCategory(name: string, isRoot: boolean = true) {
    await this.page.click('text=Create Category');
    await this.page.fill('input[name="name"]', name);
    if (!isRoot) {
      await this.page.selectOption('select[name="parentCategory"]', { index: 1 }); // Select first non-root category
    }
    await this.page.click('button:has-text("Save")');
  }

  async validateCategoryCreated(name: string) {
    await expect(this.page.locator(`text=${name}`)).toBeVisible();
  }
}