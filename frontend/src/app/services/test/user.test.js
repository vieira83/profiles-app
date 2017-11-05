import {UserService as Service} from '../user';

describe('UserService', () => {
    let service;

    const $http = {"transformResponse":[null],"transformRequest":[null],"headers":{"common":{"Accept":"application/json, text/plain, */*"},"post":{"Content-Type":"application/json;charset=utf-8"},"put":{"Content-Type":"application/json;charset=utf-8"},"patch":{"Content-Type":"application/json;charset=utf-8"}},"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","jsonpCallbackParam":"callback"};
    const user = {"id":7,"name":"Kurtis Weissnat","username":"Elwyn.Skiles","email":"Telly.Hoeger@billy.biz","address":{"street":"Rex Trail","suite":"Suite 280","city":"Howemouth","zipcode":"58804-1099","geo":{"lat":"24.8918","lng":"21.8984"}},"phone":"210.067.6132","website":"elvis.io","company":{"name":"Johns Group","catchPhrase":"Configurable multimedia task-force","bs":"generate enterprise e-tailers"}};

    beforeEach(() => {
        service = new Service($http);
    });

    describe('constructor', () => {
        it('should have default properties set', () => {
          expect(service.$http).toBe($http);
        });
    });

    describe('getData', () => {
      it(`should return 1 user and all the user info`, () => {
        // service.getData({}).then((users) => {
        //
        //   // expect(users).toBe(users);
        //   // expect(users.length).toEqual(1);
        // });
      });
    });
});

