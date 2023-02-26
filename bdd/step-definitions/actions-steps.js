const {Given} = require('@wdio/cucumber-framework');
const {pages} = require('../po')

Given('I open {string} page', function(pageName){
    return pages(pageName).open();
});