/* @ngInject */
export default class UserTile {
    constructor($state, $scope, $rootScope) {
        this.$state = $state;
        this.$scope = $scope;
        this.$rootScope = $rootScope;
    }

    $onInit($state) {

    }

    chooseUser(user) {
        this.$scope.$parent.$ctrl.selected = user.id;
        this.$rootScope.$emit('profileChange', {user: user});

    }
}
