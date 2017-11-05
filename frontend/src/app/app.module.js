// Import app styles
import '../assets/styles/app.scss';

// Global imports
import angular from 'angular';

// Local imports
import config from './app.config';
import appCore from './app.core';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
        appCore
    ])
    .config(config);

angular.bootstrap(document.documentElement, [ MODULE_NAME ], {
    strictDi: true
});

export default MODULE_NAME;