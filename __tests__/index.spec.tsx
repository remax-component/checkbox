import "expect-puppeteer";

describe("Checkbox", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:8080/#/pages/index/index");
  });

  it("works", async () => {
    const checkboxEl = await page.$("#works");
    await expect(page).toMatchElement(
      "#works.rmc-checkbox:not(.rmc-checkbox-checked)"
    );
    await checkboxEl.click();

    await expect(page).toMatchElement(
      "#works.rmc-checkbox.rmc-checkbox-checked"
    );
  });

  it("control mode", async () => {
    const checkedEl = await page.$("#control-mode-checked");
    const uncheckedEl = await page.$("#control-mode-unchecked");

    await expect(page).toMatchElement(
      "#control-mode-checked.rmc-checkbox.rmc-checkbox-checked"
    );
    await checkedEl.click();
    await expect(page).toMatchElement(
      "#control-mode-checked.rmc-checkbox.rmc-checkbox-checked"
    );

    await expect(page).toMatchElement(
      "#control-mode-unchecked.rmc-checkbox:not(.rmc-checkbox-checked)"
    );

    await uncheckedEl.click();
    await expect(page).toMatchElement(
      "#control-mode-unchecked.rmc-checkbox:not(.rmc-checkbox-checked)"
    );
  });

  it("default checked", async () => {
    const checkboxEl = await page.$("#default-checked");
    await expect(page).toMatchElement("#default-checked.rmc-checkbox-checked");
    await checkboxEl.click();

    await expect(page).toMatchElement(
      "#default-checked.rmc-checkbox:not(.rmc-checkbox-checked)"
    );
  });

  it("disabled", async () => {
    const checkboxEl = await page.$("#disabled");
    await expect(page).toMatchElement(
      "#disabled.rmc-checkbox.rmc-checkbox-checked.rmc-checkbox-disabled"
    );
    await checkboxEl.click();

    await expect(page).toMatchElement(
      "#disabled.rmc-checkbox.rmc-checkbox-checked.rmc-checkbox-disabled"
    );
  });
});
