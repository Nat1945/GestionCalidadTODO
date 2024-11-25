import { expect, Locator, Page} from '@playwright/test';

export class ToDoLogInPage {
    readonly url = "https://todo.ly/";
    readonly page: Page;
    readonly logInHomeButton: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly logInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('#ctl00_MainContent_LoginControl1_TextBoxEmail');
        this.passwordInput = page.locator('#ctl00_MainContent_LoginControl1_TextBoxPassword');
        this.logInButton = page.locator('#ctl00_MainContent_LoginControl1_ButtonLogin');
        this.logInHomeButton = page.locator('.HPHeaderLogin');
    }

    async goto() {
        await this.page.goto(this.url);
    }

    async clickOnLogIn() {
        await this.logInHomeButton.click();
    }

    async llenarDatosUsuario(email: string, password: '1945'): Promise<void> {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
    }

    async loguearUsuario(): Promise<void> {
        await this.logInButton.click();
    }
}