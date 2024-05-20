import  { expect, type Locator, type Page } from '@playwright/test';
export class LogoutPage {
    readonly page: Page;
    readonly dropdownBtn: Locator;
    readonly logoutBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dropdownBtn = page.locator('span.oxd-userdropdown-tab');
        this.logoutBtn = page.locator('//a [@href="/web/index.php/auth/logout"]');
    }

    async logoutDropdown() {
        await this.dropdownBtn.click();
    }

    async logoutLink() {
        await this.logoutBtn.click();
    }
}