export function isLeapYear(year) {
    //Oppgave 2.1 - kaster error hvis talet er negativ
    if (year < 0) {
        throw new Error('Invalid argument: year must be an integer equal to or larger than 0');
    }
    //Oppgave 3.1 - kaster error hvis parameteren er null eller undefined
    if (year === null || year === undefined) {
        throw new Error('Year is null or undefined');
    }
    return (year % 4 === 0) &&
        (year % 100 !== 0) ||
        (year % 400 === 0);
}