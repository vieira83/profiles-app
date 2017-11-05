import chosenUserCtrl from './chosenUser/controller';
import chosenUserView from './chosenUser/view.html';
import usersListCtrl from './usersList/controller';
import usersListView from './usersList/view.html';

export default function indexRoutes($stateProvider) {
    'ngInject';
    $stateProvider
        .state('index', {
            url: '/:id',
            views: {
                chosenUser: {
                    controller: chosenUserCtrl,
                    controllerAs: '$ctrl',
                    template: chosenUserView
                },
                '': {
                    controller: usersListCtrl,
                    controllerAs: '$ctrl',
                    template: usersListView
                }
            }
        });
}
