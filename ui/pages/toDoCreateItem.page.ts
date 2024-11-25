import { expect, Locator, Page} from '@playwright/test';

export class ToDoCreateItemPage {
    readonly url = "https://todo.ly/";
    readonly page: Page;
    subProjectButton: Locator;
    menuItem: Locator;
    addItemButton: Locator;
    addItemBelow: Locator;
    addItemInput: Locator;
    saveItemButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.saveItemButton = page.locator('#ItemEditSubmit');
    }

    async goto() {
        await this.page.goto(this.url);
    }

    async clickOnSubProject() {
        this.subProjectButton = this.page.locator('.ProjItemContent').filter({hasText: 'Sub Project'});
        await expect(this.subProjectButton).toBeVisible();
        await this.subProjectButton.click();
    }

    async clickOnMenuItem(){
        const subProjectButton = this.page.locator('.ProjItemContent[itemid="4379894"]');
        await expect(subProjectButton).toBeVisible();
        await subProjectButton.hover();
        const menu = this.page.locator('.ProjItemMenu[itemid="4379894"]');
        await expect(menu).toBeVisible();
        await menu.waitFor({ state: 'visible' });
        await menu.click();

        const addItemBelow = this.page.locator('ul#projectContextMenu li.add a', { hasText: 'Add item below' });
        
        await addItemBelow.waitFor({ state: 'visible' });
        await expect(addItemBelow).toBeVisible();
        await addItemBelow.click();
    }

    async llenarNuevoSubProceso(itemName: string) : Promise<void>{
        const addItemInput = this.page.locator('#AddProjectLi #ItemEditTextbox');
        await addItemInput.fill(itemName); 
        await expect(addItemInput).toHaveValue(itemName);
        const saveItemButton = this.page.locator('#AddProjectLi #ItemEditSubmit');
        await saveItemButton.click();
    }
    async clickOnSaveItem(): Promise<void> {
        const saveItemButton = this.page.locator('#AddProjectLi #ItemEditSubmit');
        await saveItemButton.click();
    }

}