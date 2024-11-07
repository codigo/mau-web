import { expect, test } from '@playwright/test';

test.describe('Navigation and Content Tests', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('home page has expected h1', async ({ page }) => {
		await expect(page.locator('h1')).toBeVisible();
	});

	test('header navigation is visible and contains correct links', async ({ page }) => {
		await expect(page.locator('header')).toBeVisible();

		const expectedLinks = ['Home', 'About me', 'Journal', 'Contact me'];
		for (const linkText of expectedLinks) {
			await expect(page.getByRole('link', { name: linkText })).toBeVisible();
		}
	});

	test('about page navigation and content', async ({ page }) => {
		await page.getByRole('link', { name: 'About me' }).click();

		// Check main heading
		await expect(page.locator('h2').first()).toBeVisible();
		expect(await page.locator('h2').first().textContent()).toBe('About Me');

		// Check subheading
		expect(await page.locator('h3').first().textContent()).toBe(
			'My professional journey is marked by significant contributions to various organizations'
		);
	});
});
