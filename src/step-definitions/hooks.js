const { Before } = require('@cucumber/cucumber');

Before({name: 'console log', tags: '@1'}, ()=> {
    console.log('============\r\nbefore hook');
});