import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/login.page';
import { EmployeePage } from '../pageObjects/employee.page';
import { LogoutPage } from '../pageObjects/logout.page';

test.describe('Test the new employee creation flow', () => {
  test('Complete employee creation flow', async ({ page }) => {
    await test.step('Login admin', async () => {
      const loginPage = new LoginPage(page);
      await loginPage.navigate();
      await loginPage.login('Admin', 'admin123');
      const dashboardTitle = await loginPage.getDashboardTitle();
      expect(dashboardTitle).toContain('Dashboard');
    });

    await test.step('Add new employee', async () => {
      const employeePage = new EmployeePage(page);
      await employeePage.navigateToPIM();
      await employeePage.clickAddButton();
      await employeePage.form('Milagros', 'Cero', '0389');
    });

    await test.step('Search for an employee and logout', async () => {
      const employeePage = new EmployeePage(page);
      const logoutPage = new LogoutPage(page);
      await employeePage.employeeBtn();
      await employeePage.EmpInformation();
      await employeePage.enterSearchId('0389');
      await employeePage.searchEmpBtn();
      await employeePage.foundEmployee();
      await logoutPage.logoutDropdown();
      await logoutPage.logoutLink();
      await expect(page).toHaveURL(/.*login/);
    });
  });
});
