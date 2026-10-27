import { test, expect } from '@playwright/test';

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login';

test.describe('acesso em area protegida - painel', () => {
    test('deve acessar painel com usuario ja logado', async ({ page }) => {
        await page.goto(`${BASE_URL}/login.html`);
        await page.fill('#email', 'zezo@pt.com');
        await page.fill('#password', '123456789');
        await page.click('#loginBtn');

        await expect(page).toHaveURL(/painel\.html/);
        await expect(page.locator('#panelTitle')).toBeVisible();
    });
});