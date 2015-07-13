//Find divisors of a number
//No loops, just map

function findDivisors(n) {
    'use strict';
    //idea: a range like for JS to get all numbers below n
    //then iterate on it

    //[1, 2, 3, ... n ]
    var numbers = (new Array(n).join('0').split('')).map(function (elt, i) {return i;});

    //[1, 2, false, 4 ...]
    var arrDivisors = numbers.map(
        function(elt){ return ( (n % elt) === 0) ? elt : false;  
    });

    //get rid of the false
    arrDivisors = arrDivisors.filter(
        function(val){ return val === false ? false : true;  
    });

    return arrDivisors;

}