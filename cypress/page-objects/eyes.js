export class Eyes {
    open(){
        cy.eyesOpen({
            appName: 'TAU TodoMVC', batchName: 'TAU TodoMVC Hello!',
            browser: [
                {name: 'chrome', width: 1024, height: 768},
                {name: 'chrome', width: 800, height: 600},
                {name: 'firefox', width: 1024, height: 768},
                {deviceName: 'iPhone X'}
            ]
        });
    }

    close(){
        cy.eyesClose();
    }

    checkWindow(screenshotName){
        cy.eyesCheckWindow(screenshotName);
    }
}