import { Page } from '@playwright/test';

export class EmployeePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async navigate() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');
    }

    async navigateToPIM() {
        await this.page.locator('//span[text()="PIM"]').click();
    }

    async clickAddButton() {
        await this.page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').click();
    }

    async shownAddEmpTitle(){
        await this.page.locator('//h6[@class="oxd-text oxd-text--h6 orangehrm-main-title"]').isVisible();
    }

    async fillFirstName(firstName: string) {
        await this.page.locator('[placeholder="First Name"]').fill(firstName);
    }

    async fillLastName(lastName: string) {
        await this.page.locator('[placeholder="Last Name"]').fill(lastName);
    }
    async fillEmployeeId(employeeId: string) {
        await this.page.locator('//input[@class="oxd-input oxd-input--active"]').nth(1).fill(employeeId);
    }

    async clickSaveButton() {
        await this.page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click();
    }
    async employeeBtn() {
        await this.page.locator('//div //li[@class="oxd-topbar-body-nav-tab --visited"]').click();
    }

    async EmpInformation() {
        await this.page.locator('//h5[@class="oxd-text oxd-text--h5 oxd-table-filter-title"]');
    }

    // async enterSearchId(Id: string) {
    //     await this.page.locator('//input[@class="oxd-input oxd-input--active"]').nth(2).fill(Id);
    // }

    async searchBtn(){
        await this.page.locator('//button[@Type="submit"]').click();
    }

    async foundEmployee(){
        await this.page.locator('//span[@class="oxd-text oxd-text--span"]');
    }
}