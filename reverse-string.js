
//Reverse a string without reverse instruction
//ie: var strReverse = str.split('').reverse().join(''); */

function reverseString(s) {
    'use strict';


    /* s is turned into an array ['T', 'h', 'e', ' ', 't', 'e', 'x', 't']
    From an initial [], we apply unshift
    ie fill array at his beginning
    => ['h', 'T']
    join to turn array into string */

    return s.split('').reduce(function (previousValue, currentValue) {
        Array.prototype.unshift.call(previousValue, currentValue);
        return previousValue;
    }, []).join('');
}