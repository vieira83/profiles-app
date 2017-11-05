import {protractor,browser, element, by, ExpectedConditions} from 'protractor';
let EC = protractor.EC;

export default class Main {
    constructor() {
        this.route = '/';
        this.el = {
            profile_heading: by.css('.list-view .profiles-title'),
            profiles: by.repeater('user in $ctrl.users'),
            user_tiles: by.css('.user-tile .tile'),
            user_profile: by.css('.choosen-user .user-profile'),
            username: by.css('.user-profile-info .username'),
            email: by.css('.user-profile-info .email')
        }
    }

    go() {
        browser.setLocation(this.route);
    }

    findAllElements (sel) {
         return element.all(sel).then(element => element)
    }
    
    findElement (sel) {
         return element.all(by.repeater('user in $ctrl.users')).then(element => element)
    }

    getText(sel) {
        return element(sel).getText().then(text => text)    
    }

    isVisible (sel) {
        // var deferred = protractor.promise.defer();
        //const elem = element(sel);
        // console.log(sel);
        // console.log(elem);
        return element(sel).isDisplayed().then( present => {
            return present ? present : false;
        });
    }

    clickOn(el) {
        return el.click().then( item => item);
    }
}