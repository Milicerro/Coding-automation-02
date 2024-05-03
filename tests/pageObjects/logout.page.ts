import { Page } from '@playwright/test';

export class LogoutPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async logoutDropdown() {
        await this.page.locator('span.oxd-userdropdown-tab').click();
    }

    async logoutLink() {
        await this.page.locator('//a [@href="/web/index.php/auth/logout"]').click();
    }
}