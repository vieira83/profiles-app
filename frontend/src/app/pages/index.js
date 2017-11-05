import angular from 'angular';

import routing from './routes';

export default angular.module('app.index', [])
    .config(routing)
    .name;