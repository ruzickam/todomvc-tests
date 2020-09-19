export class Eyes {
    constructor( appName, batchName ){
        this._appName = appName;
        this._batchName = batchName;

        this._chromeWidth = 1024;
        this._chromeHeight = 768;
        this._firefoxWidth = 1024;
        this._firefoxHeight = 768;
        this._deviceName = 'iPhone X';
    }

    /**
     * @param {number} chromeWidth
     */
    set chromeWidth( chromeWidth ){
        this._chromeWidth = chromeWidth;
    }

    /**
     * @param {number} chromeHeight
     */
    set chromeHeight( chromeHeight ){
        this._chromeHeight = chromeHeight;
    }

    /**
     * @param {number} firefoxWidth
     */
    set firefoxWidth( firefoxWidth ){
        this._firefoxWidth = firefoxWidth;
    }

    /**
     * @param {number} firefoxHeight
     */
    set firefoxHeight( firefoxHeight ){
        this._firefoxHeight = firefoxHeight;
    }

    /**
     * @param {string} deviceName
     */
    set deviceName( deviceName ){
        this._deviceName = deviceName;
    }

    open(){
        cy.eyesOpen({
            appName: this._appName, batchName: this._batchName,
            browser: [
                {name: 'chrome', width: this._chromeWidth, height: this._chromeHeight},
                {name: 'firefox', width: this._firefoxWidth, height: this._firefoxHeight},
                {deviceName: this._deviceName}
            ]
        });
    }

    close(){
        cy.eyesClose();
    }

    checkWindow( screenshotName ){
        cy.eyesCheckWindow( screenshotName );
    }
}