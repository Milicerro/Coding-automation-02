import { Page } from '@playwright/test';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(username: string, password: string) {
        await this.page.fill('[name="username"]', username);
        await this.page.fill('[name="password"]', password);
        await this.page.click('[type="submit"]');
    }

    async getDashboardTitle() {
        return await this.page.innerText('h6:has-text("Dashboard")');
    }
}