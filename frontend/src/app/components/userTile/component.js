import './styles.scss';

import angular from 'angular';

import template from './view.html';
import controller from './controller';

const moduleName = 'components.userTile';
const componentName = 'userTile';

const loader = {
    template,
    controller,
    bindings: {
    	user: '<'
    }
};

angular.module(moduleName, [])
    .component(componentName, loader);

export { moduleName, componentName }
