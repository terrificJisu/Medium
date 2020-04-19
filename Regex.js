/**
 * Ref: https://levelup.gitconnected.com/read-this-if-you-dont-know-enough-about-regex-73141bb0e1a7
 * 
*/

// 1. Basic regex
// Find a certain string in a text
const regex1 = /hij/
const test1 = regex1.test('afejlkjfslhijfd');
console.log(test1);

// A regex that matches abc at the start of a string
const regex2 = /^abc/
const test2 = regex2.test('abcjfleksjfl');
console.log(test2);

// A string that matches certain characters at the end of a string
const regex3 = /xyz$/
const test3 = regex3.test('ajflejljflkxyz');

// Summary
/*
    bar             matches a string that contains bar
    ^bar            matches a string that starts with bar
    bar$            matches a string that ends with bar
    ^foo bar$       matches a string that starts and ends with foo bar
*/