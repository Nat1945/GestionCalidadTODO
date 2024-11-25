import {expect, Locator, Page} from '@playwright/test';
import { read } from 'fs';

export class ToDoAddItemPage {
    readonly url = "https://todo.ly/";
    readonly page: Page;
    subProjectButton: Locator;
    readonly addInput: Locator;
    readonly addButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addInput = page.locator('#NewItemContentInput');
        this.addButton = page.locator('#NewItemAddButton');
    }

    async clickOnSubProject() {
        this.subProjectButton = this.page.locator('.ProjItemContent').filter({hasText: 'Sub Proceso 2'});
        await this.subProjectButton.click();
        await this.subProjectButton.waitFor({state: 'visible'});
    }

    async llenarNuevoItem(itemName: string) : Promise<void>{
        await expect(this.addInput).toBeVisible();
        await this.addInput.fill(itemName);
        await expect(this.addInput).toHaveValue(itemName);
    }

    async clickOnAddItem(): Promise<void> {
        await expect(this.addButton).toBeEnabled();
        await this.addButton.click();
    }
}