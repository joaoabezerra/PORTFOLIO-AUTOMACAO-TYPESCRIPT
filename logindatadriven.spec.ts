import { test, expect } from '@playwright/test';
import { cstLogins } from '../../data/login.data';

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login';

test.describe('autenticacao por data-driven de multiplos perfis', () => {
    for (const cenario of cstLogins) {
        test(`Login com Perfil: ${cenario.perfil}`, async ({ page }) => {
            await page.goto(`${BASE_URL}/login.html`);
            await page.locator('#email').fill(cenario.email);
            await page.locator('#password').fill(cenario.senha);
            await page.locator('#loginBtn').click();

            if (cenario.esperaSucesso) {
                await expect(page).toHaveURL(cenario.urlEsperada);
                await expect(page.locator('#panelTitle')).toBeVisible();
            } else {
                await expect(page).toHaveURL(cenario.urlEsperada);
                await expect(page.locator('#loginBtn')).toBeVisible();
            }
        });
    }
});