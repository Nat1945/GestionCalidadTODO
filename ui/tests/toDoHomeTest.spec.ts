import {test, expect} from '@playwright/test';
import {ToDoLogInPage} from '../pages/toDoLogIn.page';
import { ToDoCreateItemPage } from '../pages/toDoCreateItem.page';
import { ToDoAddItemPage } from '../pages/toDoAddItem.page';
test.beforeEach(async ({page}) => {
    await page.goto("https://todo.ly/");
});

test('Nuevo Sub Proceso', async ({page}) => {
    const loginPage = new ToDoLogInPage(page);
    const createItemPage = new ToDoCreateItemPage(page);
    await loginPage.clickOnLogIn();
    await loginPage.llenarDatosUsuario('brenda.gutierrez@ucb.edu.bo', '1945');
    await loginPage.loguearUsuario();
    await createItemPage.clickOnSubProject();
    await createItemPage.clickOnMenuItem();
    await createItemPage.llenarNuevoSubProceso('Proceso1234');
    await createItemPage.clickOnSaveItem();
});

test('Nuevo Item en subproceso 2', async ({page}) => {
    const loginPage = new ToDoLogInPage(page);
    const addItemPage = new ToDoAddItemPage(page);
    await loginPage.clickOnLogIn();
    await loginPage.llenarDatosUsuario('brenda.gutierrez@ucb.edu.bo', '1945');
    await loginPage.loguearUsuario();
    await addItemPage.clickOnSubProject();
    await addItemPage.llenarNuevoItem('Item UNO');
    await addItemPage.clickOnAddItem();
    await addItemPage.llenarNuevoItem('Item DOS');
    await addItemPage.clickOnAddItem();
});