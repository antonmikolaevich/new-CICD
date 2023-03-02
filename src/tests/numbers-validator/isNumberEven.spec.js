// import {NumbersValidator} from '../../app/numbers_validator.js';
var tags = require('mocha-tags');
const NumbersValidator = require('../../app/numbers_validator.js')
// import {expect, assert} from 'chai';
const {expect, assert} = require('chai')
tags('unitTests').describe ('isNumberEven tests', () => {
    let validator;
    beforeEach(() => {
        validator = new NumbersValidator();
    });

    afterEach(() => {
        validator = null
    });

    it('should return true when provided an even number', () => {
        const validationResults = validator.isNumberEven(4);
        expect(validationResults).to.be.equal(true)
    });

    it('should return false when provided an odd number', () => {
        const validationResults = validator.isNumberEven(5);
        expect(validationResults).to.be.equal(false)
    });

    it('should throw an error when provided a string', () =>{
        expect(() => {
            validator.isNumberEven('4');
        }).to.throw('[4] is not of type "Number" it is of type "string"')
    })

    it('should throw an error when no value is provided', () =>{
        expect(() => {
            validator.isNumberEven();
        }).to.throw('[undefined] is not of type "Number" it is of type "undefined"')
    })

});

tags('unitTests').describe ('getEvenNumbersFromArray tests', () => {
    let validator;
    beforeEach(() => {
        validator = new NumbersValidator();
    });

    afterEach(() => {
        validator = null
    });

    it('should return array of even numbers', () =>{
        const arrayOfNumbers = [1,2,3];
        const evenNumbersOfArray = validator.getEvenNumbersFromArray(arrayOfNumbers);
        expect(evenNumbersOfArray).to.be.eql([2])
    })

    it('should return an empty array when no even numbers are passed in', () =>{
        const arrayOfNumbers = [3,5,7,9];
        const evenNumbersOfArray = validator.getEvenNumbersFromArray(arrayOfNumbers);
        //expect(evenNumbersOfArray).to.be.eql([])
        assert(evenNumbersOfArray, [])
    })

    it('should throw an error if array is not full of numbers', () =>{
        expect(() => {
            validator.getEvenNumbersFromArray([1,'2',3]);
        }).to.throw('[1,2,3] is not an array of "Numbers"')
    })

    it('should throw an error when no value is provided ', () =>{
        expect(() => {
            validator.getEvenNumbersFromArray();
        }).to.throw('[undefined] is not an array of "Numbers"')
    })
});

tags('unitTests').describe ('isAllNumbers tests', () => {
        let validator;
        beforeEach(() => {
            validator = new NumbersValidator();
        });
    
        afterEach(() => {
            validator = null
        });

    it('should return true when provided an array of numbers', () =>{
        const arrayOfNumbers = [3,5,7,9];
        const newArrayOfNumbers = validator.isAllNumbers(arrayOfNumbers);
        //expect(newArrayOfNumbers).to.be.equal(true)
        assert.isTrue(newArrayOfNumbers)
    })

    it('should return false if array is not full of numbers', () =>{
        const arrayOfNumbers = [3,'5',7,9];
        const newArrayOfNumbers = validator.isAllNumbers(arrayOfNumbers);
        //expect(newArrayOfNumbers).to.be.equal(false)
        assert.isFalse(newArrayOfNumbers)
    })

    it('should throw an error when provided a number', () =>{
        expect(() => {
            validator.isAllNumbers(3);
        }).to.throw('[3] is not an array')
    })

    it('should throw an error when provided a string', () =>{
        expect(() => {
            validator.isAllNumbers('array');
        }).to.throw('[array] is not an array')
    })

    it('should throw an error when no value is provided', () =>{
        expect(() => {
            validator.isAllNumbers();
        }).to.throw('[undefined] is not an array')
    })

});

tags('unitTests').describe ('isInteger tests', () => {
    let validator;
    beforeEach(() => {
        validator = new NumbersValidator();
    });

    it('should return true when provided a number', () =>{
        const n = validator.isInteger(1);
        expect(n).to.be.equal(true)
    })

    it('should throw an error when provided a string', () =>{
        expect(() => {
            validator.isInteger('string');
        }).to.throw('[string] is not a number')
    })

    it('should throw an error when no value is provided', () =>{
        expect(() => {
            validator.isInteger();
        }).to.throw('[undefined] is not a number')
    })

});
