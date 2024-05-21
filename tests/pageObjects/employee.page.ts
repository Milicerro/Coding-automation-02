import  { expect, type Locator, type Page } from '@playwright/test';

export class EmployeePage {
    readonly page: Page;
    readonly url: string = 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee';
    readonly pim: Locator;
    readonly addBtn: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly employeeId: Locator;
    readonly saveBtn: Locator;
    readonly searchId: Locator;
    readonly searchBtn: Locator;
    readonly visibleEmpList:Locator;
    readonly addEmpTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pim = page.locator('//span[text()="PIM"]');
        this.addBtn = page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]');
        this.firstName = page.locator('[placeholder="First Name"]');
        this.lastName = page.locator('[placeholder="Last Name"]');
        this.employeeId = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]');
        this.saveBtn = page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]');
        this.searchId = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]');
        this.searchBtn = page.locator('//button[@Type="submit"]');
        this.visibleEmpList = page.locator('//div //li[@class="oxd-topbar-body-nav-tab --visited"]');
        this.addEmpTitle = page.locator('//h6[@class="oxd-text oxd-text--h6 orangehrm-main-title"]');
    }
    async navigate() {
        await this.page.goto(this.url);
    }

    async navigateToPIM() {
        await this.pim.click();
    }

    async clickAddButton() {
        await this.addBtn.click();
    }

    async shownAddEmpTitle(){
        await this.addEmpTitle.isVisible();
    }

    async form(firstName: string, lastName: string, employeeId: string) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.employeeId.fill(employeeId);
        await this.saveBtn.click();
    }

    async employeeBtn() {
        await this.visibleEmpList.click();
    }

    async EmpInformation() {
        await this.page.locator('//h5[@class="oxd-text oxd-text--h5 oxd-table-filter-title"]');
    }

    async enterSearchId(Id: string) {
         await this.searchId.fill(Id);
    }

    async searchEmpBtn(){
        await this.searchBtn.click();
    }

    async foundEmployee(){
        await this.page.locator('//span[@class="oxd-text oxd-text--span"]');
    }
}