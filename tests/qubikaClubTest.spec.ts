import { test, expect } from '@playwright/test';
import { UserApi } from '../api/userApi';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';
import { CategoryPage } from '../pages/categoryPage';

test('Qubika Sports Club Management System E2E Test', async ({ page, request }) => {
  const userApi = new UserApi(request);
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const categoryPage = new CategoryPage(page);

  let userData;

  test.setTimeout(120000); // Aumenta el tiempo de espera a 2 minutos

  // Step 1: Create a new user through API
  try {
    console.log('Attempting to create a new user via API...');
    userData = await userApi.createUser();
    console.log('User data received:', userData);
    expect(userData).toBeTruthy();
    expect(userData.id).toBeTruthy();
    console.log('User created successfully with ID:', userData.id);
  } catch (error) {
    console.error('Failed to create user:', error);
    throw error;
  }

  // Step 2: Go to Qubika Sports Club Management System
  try {
    console.log('Navigating to login page...');
    await loginPage.navigate();
    console.log('Navigation to login page successful');
  } catch (error) {
    console.error('Failed to navigate to login page:', error);
    throw error;
  }

  // Step 3: Validate that the login page is displayed correctly
  try {
    console.log('Validating login page...');
    await loginPage.validatePage();
    console.log('Login page validation successful');
  } catch (error) {
    console.error('Login page validation failed:', error);
    throw error;
  }

  // Step 4: Log in with the created user
  try {
    console.log('Attempting to log in...');
    await loginPage.login(userData.email, 'TestPassword123!');
    console.log('Login attempt completed');
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }

  // Step 5: Validate that the user is logged in
  try {
    console.log('Validating successful login...');
    await dashboardPage.validateLogin();
    console.log('Login validation successful');
  } catch (error) {
    console.error('Login validation failed:', error);
    throw error;
  }

  // Step 6a: Go to the Category page
  try {
    console.log('Navigating to Categories page...');
    await dashboardPage.goToCategories();
    console.log('Navigation to Categories page successful');
  } catch (error) {
    console.error('Failed to navigate to Categories page:', error);
    throw error;
  }

  // Step 6b: Create a new category and validate
  try {
    const rootCategoryName = `Root Category ${Date.now()}`;
    console.log(`Creating root category: ${rootCategoryName}`);
    await categoryPage.createCategory(rootCategoryName);
    await categoryPage.validateCategoryCreated(rootCategoryName);
    console.log('Root category created and validated successfully');
  } catch (error) {
    console.error('Failed to create or validate root category:', error);
    throw error;
  }

  // Step 6c: Create a sub category and validate
  try {
    const subCategoryName = `Sub Category ${Date.now()}`;
    console.log(`Creating sub category: ${subCategoryName}`);
    await categoryPage.createCategory(subCategoryName, false);
    await categoryPage.validateCategoryCreated(subCategoryName);
    console.log('Sub category created and validated successfully');
  } catch (error) {
    console.error('Failed to create or validate sub category:', error);
    throw error;
  }

  console.log('E2E test completed successfully');
});