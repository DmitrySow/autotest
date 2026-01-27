const { test, expect } = require('@playwright/test');

test('Open Google', async ({ page }) => {
  await page.goto('https://google.com');

  const searchBox = page.locator('textarea[name="q"], input[name="q"]');
  await searchBox.click(); // Фокусируемся на поле

  await page.keyboard.insertText('Я ');
  await page.waitForTimeout(200);
  await page.keyboard.insertText('собака');
  await page.waitForTimeout(200);
  await page.keyboard.insertText('павлова');
  console.log('✅ Введен текст: Playwright automation testing');

  await page.waitForSelector('input[name="btnK"]', { state: 'visible' });
  
  const searchBottomOfSearch = page.locator('input[name="btnK"]').first();
  await searchBottomOfSearch.click();

  console.log('Title:', await page.title());
});
