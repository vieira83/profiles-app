import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
// import 'ui.bootstrap' from 'angular-ui-bootstrap';

import {
    pagesNames,
    serviceNames,
    componentNames
} from './autoloader';


const MODULE_NAME = 'app.core';

angular.module(MODULE_NAME, [
    // 3rd party
    uirouter,
    ngAnimate,

    // local
    ...componentNames,
    ...pagesNames,
    ...serviceNames,
]);

export default MODULE_NAME;
