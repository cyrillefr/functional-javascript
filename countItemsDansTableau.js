var arr = [ 'apple', [ 'banana', 'strawberry', 'apple' ] ];

//Combien y a t-il d'un certain item dans un tableau avec des sous tableaux ? 
//How much items in an array with sub arrays ?

//without Recursion et functional style !!!!
function countItems(arr, item) {
    'use strict';

    //trick to flatten an array => array into string and back into array => lose sub arrays
    var flattenedArr = arr.join().split(',');

    function isItemIsString(s) {
        if (s === item) {
            return 1;
        } else {
            return 0;
        }
    }

    //Map & Reduce
    return flattenedArr.map(isItemIsString).reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });

}

//works
countItems([ 'apple',  [ 'banana', 'strawberry', 'apple' ] ], "apple"); // => 2



