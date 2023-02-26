const BaseComponent = require('../common/base.component.js');

class ScheduleComponent extends BaseComponent{
    constructor() {
        super('.schedule-container');
    }

    get appointment() {
        return this.rootEl.$('[data-id="Appointment_1013"]');
    }

    get targetPlace() {
        return this.rootEl.$('[data-date="1596355200000"]');
    }

    calendar (view) {
        const selectors = {
            day: '[aria-label="Day"]',
            week: '[aria-label="Week"]',
            month: '[aria-label="Month"]',
            timelineDay: '[aria-label="Timeline Day"]',
        }
        return this.rootEl.$(selectors[view]);
    }

    get changedView() {
        return this.rootEl.$('div[aria-label="August 2020"]');
    }


}
module.exports = ScheduleComponent;