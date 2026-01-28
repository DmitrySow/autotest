const { test, expect } = require('@playwright/test'); // Загружаем библиотеку с двумя стандартными функциями

test('perehodNaSait.test', async ({ page }) => {    // Создаем новый тест с его названием, асинхронный, и передаем в него один параметр в данном случае объект страницы браузера
  await page.goto('https://demoqa.com/');     // Ждем завершения операции навигации к указанной внутри странице

  //const headerPage = page.locator('href[name="https://demoqa.com"]');  // записываем в константу заголовок сайта
  const currentUrl = await page.url();

  
    if (currentUrl == "https://demoqa.com/")
    {
        console.log("Мы в нужном месте - DemoQA");  //добавить здесь выведение лога через переменную и удаление у нее ненужных префиксов http
    }
    else
    {
        console.log("НИХУЯЯЯЯЯ");
    };                                                  // Это логирование в консоли
});