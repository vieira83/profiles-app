import angular from 'angular';

const serviceName = 'user';
const entityEndpointUrl = 'https://jsonplaceholder.typicode.com/users';

export class UserService {
    /* @ngInject */
    constructor($http) {
        this.$http = $http;
    }

    getData({config = {}, id}) {
        return this.$http
            .get(`${entityEndpointUrl}/${id}`, config);
    }
}

export default angular.module(`services.${serviceName}`, [])
    .service(`${serviceName}Service`, UserService)
    .name;