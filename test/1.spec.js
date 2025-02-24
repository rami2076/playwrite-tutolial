import {test, expect, chromium} from '@playwright/test';


test('has title', async ({page}) => {
  await page.goto('https://attendance.moneyforward.com/my_page/attendances');
  await page.click("body > div.attendance-contents > div > div > div > div > a")
  await page.getByLabel('Email').fill('yyyy')
  await page.click('#submitto')
  await page.locator('#mfid_user\\[password\\]').fill('xxxxx')
  await page.click('#submitto')
  await expect(page).toHaveTitle(/Playwright/);
});