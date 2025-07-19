import { isLeapYear } from "./app.js";

const years = [1820, 1960, 2020];

describe('A year is a leap year', () => {
    //oppgave1 bruke av test.each for å teste flere verdier
    test.each(years)('Year is divisible by 4 but not by 100', (years) => {
        expect(isLeapYear(years)).toBe(true);
    });

    test('Year is divisible by 400', () => {
        expect(isLeapYear(2000)).toBeTruthy();
    });
});

//Oppgave 4 - gruperer testene som kaster error
describe('A year is not suported', () => {

    //Oppgave 2.2 - tester hvis error er kastet for negative tall
    test('Year is negative', () => {

        expect(() => isLeapYear(-2)).toThrowError('Invalid argument: year must be an integer equal to or larger than 0');
    });

    //Oppgave 3.2 - tester hvis error er kastet for null eller undefined input
    test('Year is undefined', () => {
        expect(() => isLeapYear()).toThrowError('Year is null or undefined');
    });

    test('Year is null', () => {
        expect(() => isLeapYear(null)).toThrowError('Year is null or undefined');
    });

});

describe('A year is not a leap year', () => {
    test('Year is not divisible by 4', () => {
        expect(isLeapYear(1981)).toBeFalsy();
    });
    test('Year is divisible by 100 but not by 400', () => {
        expect(isLeapYear(2100)).toBeFalsy();
    });
});