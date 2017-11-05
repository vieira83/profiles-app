import UsersList from './controller';
import usersService from '../../services/users'

let ctrl;

describe('UsersList controller', () => {
    const usersService = {};

    beforeEach(() => {
        ctrl = new UsersList(usersService);
    });

    describe('constructor', () => {
        //...
    });

    describe('$onInit', () => {
       //
    });

    describe('fetchUsers', () => {
        const response = {
            data: [{id:"test"}]
        };
        beforeEach(() => {
            usersService.getData = jasmine.createSpy('getData');
            usersService.getData.and.returnValue({
                then: () => {Promise.resolve(response.data)}
            });
        });

        it('should set users property with reponse.data', () => {
            expect(ctrl.users).toEqual(response.data);
        });
    });
});
