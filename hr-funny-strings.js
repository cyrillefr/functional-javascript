//Hacker rank - challenges/funny-string
//Link: https://www.hackerrank.com/challenges/funny-string
// No use of multi nested for loops
//Just one loop to process each input(could have use forEach though)

//Idea: instead of iterate over the same array with differents indexes
//and process the char difference,
//Compute 2 arrays and apply map with a function (could have factorized)

//Then every function to check if cond true for every item

function processData(input) {
    'use strict';

    var arrInput =  input.replace(/\n/gi, " ").split(' ') 
    var nbLinesToTest = arrInput.slice(1);

    var i = 1, tabLinesLength = arrInput.length - 1;
    
    for(i; i <= tabLinesLength; i ++){
        var s = arrInput[i];
        
        var S = s.split('');
        var r = s.split('').reverse().join('');
        var R = r.split('');

        var S1 = S.slice(1, S.length);
        var S2 = S.slice(0, S.length - 1);

        var R1 = R.slice(1, R.length);
        var R2 = R.slice(0, R.length - 1);

        var t1 = S1.map(function (elt, idx) {
            return Math.abs(elt.charCodeAt() - this[idx].charCodeAt());
        }, S2);


        var t2 = R1.map(function (elt, idx) {
            return Math.abs(elt.charCodeAt() - this[idx].charCodeAt());
        }, R2);


        if (t1.every(function (elt, idx) {
            return elt === t2[idx];
        }, t2) === true) {
            console.log('Funny');
        } else {
            console.log('Not Funny');
        }
    }
} 