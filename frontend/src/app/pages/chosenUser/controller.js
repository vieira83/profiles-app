import './styles.scss';
/* @ngInject */
export default class ChosenUser {
    constructor($rootScope, $state, userService) {
        this.userService = userService;
        this.$state = $state;
        this.$rootScope = $rootScope;
        this.user_id = this.$state.params.id || null;
    }

    $onInit() {
        this.fetchUser(this.user_id);

        this.$rootScope.$on('profileChange', function (event, args) {
            this.user_id = args.user.id;
            this.fetchUser(this.user_id);
        }.bind(this));

    }

    fetchUser(user_id) {
        if (this.user_id) {
            return this.userService.getData({id: user_id}).then(response => {
                return this.user = response.data;
            });
        }

        return null;
    }
}
