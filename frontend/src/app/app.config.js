export default function appConfig($urlRouterProvider, $locationProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}
