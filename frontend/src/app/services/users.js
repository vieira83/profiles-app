import angular from 'angular';

const serviceName = 'users';
const entityEndpointUrl = 'https://jsonplaceholder.typicode.com/users';

export class UsersService {
    /* @ngInject */
    constructor($http) {
        this.$http = $http;
    }

    getData({ config = {} }) {
        return this.$http
            .get(`${entityEndpointUrl}`, config);
    }
}

export default angular.module(`services.${serviceName}`, [])
    .service(`${serviceName}Service`, UsersService)
    .name;