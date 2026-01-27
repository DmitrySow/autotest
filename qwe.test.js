const { test, expect } = require('@playwright/test'); // Загружаем библиотеку с двумя стандартными функциями

test('Open Google', async ({ page }) => {    // Создаем новый тест с его названием, асинхронный, и передаем в него один параметр в данном случае объект страницы браузера
  await page.goto('https://google.com');     // Ждем завершения операции навигации к указанной внутри странице

  const searchBox = page.locator('textarea[name="q"], input[name="q"]');
  await searchBox.click(); // Фокусируемся на поле

  await searchBox.fill('Playwright automation testing');
  console.log('✅ Введен текст: Playwright automation testing');

  await page.waitForSelector('input[name="btnK"]', { state: 'visible' });

  const searchBottomOfSearch = page.locator('input[name="btnK"]').first();
  await searchBottomOfSearch.click();

  // await page.keyboard.press('Enter');

  // await page.click('input[name="btnK"]');

 console.log('📄 Заголовок:', title);
 console.log('🔗 Адрес:', url);      // Это логирование в консоли
});