import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();
});

test('home page has expected title', async ({ page }) => {
	await page.goto('/');
	expect(await page.title()).toBe('Mauricio Mercado');
});

test('home page has expected meta description', async ({ page }) => {
	await page.goto('/');
	const description = await page.$eval('meta[name="description"]', (el) =>
		el.getAttribute('content')
	);
	expect(description).toBe(
		"Mauricio Mercado's personal website. A full stack developer based in Canada"
	);
});

test('home page has expected meta keywords', async ({ page }) => {
	await page.goto('/');
	const keywords = await page.$eval('meta[name="keywords"]', (el) => el.getAttribute('content'));
	expect(keywords).toBe(
		'Mauricio Mercado, Full Stack Developer, Web Developer, Software Developer, Canada, Contractor.'
	);
});

test('home page has expected meta author', async ({ page }) => {
	await page.goto('/');
	const author = await page.$eval('meta[name="author"]', (el) => el.getAttribute('content'));
	expect(author).toBe('Mauricio Mercado');
});

test('header is visible', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('header')).toBeVisible();

	const header = page.locator('header');
	const headerText = await header.innerText();
	expect(headerText).toMatch('Home\nAbout me\nJournal\nContact me');
});

test('on click of about me, about me page is visible', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'About me' }).click();
	await expect(page.locator('h2').first()).toBeVisible();
	expect(await page.locator('h2').first().textContent()).toBe('About Me');
});

test('on click of about me, experiences are visible', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'About me' }).click();
	await expect(page.locator('h2').first()).toBeVisible();
	expect(await page.locator('h3').first().textContent()).toBe(
		'My professional journey is marked by significant contributions to various organizations'
	);
});
