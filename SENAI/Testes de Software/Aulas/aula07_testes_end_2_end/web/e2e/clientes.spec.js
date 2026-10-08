import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page, request }) => {
  const resposta = await request.post("http://localhost:3000/__reset");
  expect(resposta.status()).toBe(204);
  await page.goto("/");
});

test("Lista os clientes iniciais", async ({ page }) => {
  await page.getByRole("button", { name: "Clientes" }).click();
  await expect(page.getByRole("heading", { name: "Clientes" })).toBeVisible();
  await expect(page.getByRole("row")).toHaveCount(3);
  await expect(page.getByRole("cell", { name: "Ana Souza" })).toBeVisible();
  await expect(page.getByRole("cell", { name: "Bruno Lima" })).toBeVisible();
});

test("Cadastra um cliente novo", async ({ page }) => {
  await page.getByRole("button", { name: "Clientes" }).click();
  await page.getByLabel("Nome").fill("Carla Dias");
  await page.getByLabel("Email").fill("carla@email.com");
  await page.getByRole("button", { name: "Cadastrar" }).click();

  const linha = page.getByRole("row", { name: /Carla Dias/ });
  await expect(linha).toBeVisible();
  await expect(linha).toContainText("carla@email.com");
  await expect(page.getByLabel("Nome")).toContainText("");
  await expect(page.getByLabel("Email")).toContainText("");
});

test("Mostra erro ao cadastrar sem preenchimento", async ({ page }) => {
  await page.getByRole("button", { name: "Clientes" }).click();
  await page.getByRole("button", { name: "Cadastrar" }).click();
  await expect(page.getByText("Nome e email sao obrigatorios")).toBeVisible();
});

test("Edita um cliente", async ({ page }) => {
  await page.getByRole("button", { name: "Clientes" }).click();
  getByRole("button", { name: "Editar" }).nth(1);
  await expect(page.getByLabel("Nome")).toContainText("Bruno Lima");
  await expect(page.getByLabel("Email")).toContainText("bruno@email.com");
  await page.getByLabel("Nome").fill("Bruno Lima Silva");
  const linha = page.getByRole("row", { name: /Carla Dias/ });
  await expect(linha).toBeVisible();
  await expect(linha).toContainText("carla@email.com");
  await expect(page.getByLabel("Nome")).toContainText("");
  await expect(page.getByLabel("Email")).toContainText("");
});
