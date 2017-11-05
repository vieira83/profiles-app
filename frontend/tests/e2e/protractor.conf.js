require('babel-core/register');


exports.config = {
    baseUrl: 'http://localhost:3000',
    framework: 'jasmine2',
    allScriptsTimeout: 30000,
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {}
    },
    /**
     * The order of those specs is crucial
     * because of necessity of (not) being logged in
     */
    specs: [
        './**/*.spec.js'
    ],
    plugins: [{
        package: 'protractor-console-plugin',
        failOnWarning: false,
        logWarnings: true,
        failOnError: true,
        exclude: [
            /credentials/,
            /user with that e-mail address/
        ]
    }],
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        defaultTimeoutInterval: 120000
    },
    onPrepare: function () {
        browser.driver.executeScript(function () {
            return {
                width: window.screen.availWidth,
                height: window.screen.availHeight
            };
        }).then(function (screenSize) {
            browser.driver.manage().window().setPosition(0, 0);
            browser.driver.manage().window().setSize(1600, screenSize.height);
        });

        browser.get('/');

        var SpecReporter = require('jasmine-spec-reporter');

        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'none',    // display stacktrace for each failed assertion, values: (all|specs|summary|none)
            displayFailuresSummary: true, // display summary of all failures after execution
            displayPendingSummary: true,  // display summary of all pending specs after execution
            displaySuccessfulSpec: true,  // display each successful spec
            displayFailedSpec: true,      // display each failed spec
            displayPendingSpec: false,    // display each pending spec
            displaySpecDuration: false,   // display each spec duration
            displaySuiteNumber: false,    // display each suite number (hierarchical)
            colors: {
                success: 'green',
                failure: 'red',
                pending: 'yellow'
            },
            prefixes: {
                success: '✓ ',
                failure: '✗ ',
                pending: '* '
            },
            customProcessors: [],
            isVerbose: true
        }));
    }
};
