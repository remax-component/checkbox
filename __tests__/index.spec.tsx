import "expect-puppeteer";

describe("Checkbox", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:8080/#/pages/index/index");
  });

  it("works", async () => {
    const checkboxEl = await page.$('[data-test-id="works"]');
    await expect(page).toMatchElement(
      '[data-test-id="works"].rmc-checkbox:not(.rmc-checkbox-checked)'
    );
    await checkboxEl.click();

    await expect(page).toMatchElement(
      '[data-test-id="works"].rmc-checkbox.rmc-checkbox-checked'
    );
  });

  it("control mode", async () => {
    const checkedEl = await page.$('[data-test-id="control-mode-checked"]');
    const uncheckedEl = await page.$('[data-test-id="control-mode-unchecked"]');

    await expect(page).toMatchElement(
      '[data-test-id="control-mode-checked"].rmc-checkbox.rmc-checkbox-checked'
    );
    await checkedEl.click();
    await expect(page).toMatchElement(
      '[data-test-id="control-mode-checked"].rmc-checkbox.rmc-checkbox-checked'
    );

    await expect(page).toMatchElement(
      '[data-test-id="control-mode-unchecked"].rmc-checkbox:not(.rmc-checkbox-checked)'
    );

    await uncheckedEl.click();
    await expect(page).toMatchElement(
      '[data-test-id="control-mode-unchecked"].rmc-checkbox:not(.rmc-checkbox-checked)'
    );
  });

  it("default checked", async () => {
    const checkboxEl = await page.$('[data-test-id="default-checked"]');
    await expect(page).toMatchElement(
      '[data-test-id="default-checked"].rmc-checkbox-checked'
    );
    await checkboxEl.click();

    await expect(page).toMatchElement(
      '[data-test-id="default-checked"].rmc-checkbox:not(.rmc-checkbox-checked)'
    );
  });

  it("disabled", async () => {
    const checkboxEl = await page.$('[data-test-id="disabled"]');
    await expect(page).toMatchElement(
      '[data-test-id="disabled"].rmc-checkbox.rmc-checkbox-checked.rmc-checkbox-disabled'
    );
    await checkboxEl.click();

    await expect(page).toMatchElement(
      '[data-test-id="disabled"].rmc-checkbox.rmc-checkbox-checked.rmc-checkbox-disabled'
    );
  });
});
