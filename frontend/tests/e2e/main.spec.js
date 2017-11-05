import { browser, element, by } from 'protractor';

import Main from './page-objects/main.page';

describe('When the user enters Main page', () => {
    const page = new Main();

    beforeAll(() => {
        page.go();
    });

    it('should display proper app title', () => {
        expect(browser.getTitle()).toEqual('SMST Quiz');
    });


    it('should see list of profiles', () => {
    	page.findAllElements(page.el.profiles).then (profiles => {
    		expect(profiles.length).toBeGreaterThan(1);
    	});
    });
    
    it('When I click on a user\'s tile I can see user\'s details below the listing"', () => {
    	page.findAllElements(page.el.profiles).then(profile => {
    		const firstProfile = profile[0];
    		firstProfile.element(by.css('.user-tile')).click().then( user => {
                expect(page.isVisible(page.el.user_profile)).toBe(true);
                expect(page.getText(page.el.username)).not.toBe('Var');
                expect(page.getText(page.el.username)).toBe('Bret');
                expect(page.getText(page.el.email)).not.toBe('Sincere@april.biztest');
                expect(page.getText(page.el.email)).toBe('Sincere@april.biz');
            });
    	});
    });	
      
});