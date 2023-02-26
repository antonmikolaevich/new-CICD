const BaseComponent = require('./base.component.js');

class SideMenuComponent extends BaseComponent {
    constructor() {
        super('#plannerSiderBar')
    }

    get name() {
        return this.rootEl.$('.name');
    }

    item (param) {
        const selectors = {
            dashboard: 'div.dashboard',
            schedule: 'div.calendar',
            doctors: 'div.doctors',
            patients: 'div.patients',
            preference: 'div.preference',
            about: 'div.about'
        };
        return this.rootEl.$(`${selectors[param.toLowerCase()]}`);
    }
}  

module.exports = SideMenuComponent;