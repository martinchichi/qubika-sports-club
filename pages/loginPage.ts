import { Page, expect } from '@playwright/test';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('/#/auth/login');
  }

  async validatePage() {
    await expect(this.page.locator('h2:has-text("Sign In")')).toBeVisible();
    await expect(this.page.locator('input[type="email"]')).toBeVisible();
    await expect(this.page.locator('input[type="password"]')).toBeVisible();
    await expect(this.page.locator('button:has-text("Sign in")')).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.page.fill('input[type="email"]', email);
    await this.page.fill('input[type="password"]', password);
    await this.page.click('button:has-text("Sign in")');
  }
}