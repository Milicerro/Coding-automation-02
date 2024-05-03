import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/login.page';
import { EmployeePage } from '../pageObjects/employee.page';
import { LogoutPage } from '../pageObjects/logout.page';

test.describe('Test the new employee creation flow', () => {
  test('Login admin', async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.navigate();
      await loginPage.login('Admin', 'admin123');
      const dashboardTitle = await loginPage.getDashboardTitle();
      expect(dashboardTitle).toContain('Dashboard');
    //});

   //test('Add new employee', async ({ page }) => {
    const employeePage = new EmployeePage(page);
    await employeePage.navigateToPIM();
    await employeePage.clickAddButton();
    await employeePage.fillFirstName('Milagros');
    await employeePage.fillLastName('Cero');
    await employeePage.fillEmployeeId('0389');
    await employeePage.clickSaveButton();
    // });

    // test('Search for an employee and logout', async ({ page }) => {
    const logoutPage = new LogoutPage(page);
    await employeePage.employeeBtn();
    await employeePage.EmpInformation();
    // await employeePage.enterSearchId('0389');
    await employeePage.searchBtn();
    await employeePage.foundEmployee();
    await logoutPage.logoutDropdown();
    await logoutPage.logoutLink();
    await expect(page).toHaveURL(/.*login/);
  });
});