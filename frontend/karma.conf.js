// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
var isDebug =true;
var browsers = [isDebug ? 'Chrome' : 'PhantomJS'];
module.exports = function karmaConfig(config) {
    config.set({
        frameworks: [
            // Reference: https://github.com/karma-runner/karma-jasmine
            // Set framework to jasmine
            'jasmine'
        ],

        reporters: [
            // Reference: https://github.com/mlex/karma-spec-reporter
            // Set reporter to print detailed results to console
            'mocha',

            // Reference: https://github.com/karma-runner/karma-coverage
            // Output code coverage files
            'coverage'
        ],
        files: [
            'src/tests.webpack.js'
        ],
        preprocessors: {
            'src/tests.webpack.js': ['webpack', 'sourcemap']
        },

        browsers: [
            // Run tests using PhantomJS
           'PhantomJS'
        ],
        customLaunchers: {
            'PhantomJS_custom': {
                base: 'PhantomJS',
                debug: true,
            },
        },
        plugins: [
            "karma-coverage",
            "karma-jasmine",
            "karma-mocha-reporter",
            "karma-phantomjs-launcher",
            "karma-sourcemap-loader",
            "karma-spec-reporter",
            "karma-webpack",
            'karma-phantomjs-launcher',
            'karma-chrome-launcher'
        ],
       
        port:      9876,
        singleRun: true,

        // Configure code coverage reporter
        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                {type: 'text-summary'},
                {type: 'html'}
            ]
        },

        webpack: require('./webpack.config'),

        // Hide webpack build information from output
        webpackMiddleware: {
            noInfo: 'errors-only'
        },
        client: {
            captureConsole: true,
            mocha: {
                bail: true
            }
        },
        angularCli: {
            config: './angular-cli.json',
            environment: 'dev',
            sourcemap: true
        }
    });
};
