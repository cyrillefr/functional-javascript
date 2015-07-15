[1,2,3,4]

i=0
t slice(0,0) = [] -> ne teste PAS !!!
t slice(1,4) = 2,3,4

i = 1 pivot = 2
t slice(0,1) = 1
t slice(2,4) = [3,4]

i=2
t slice(0,2)
t slice(3,4)



t.reduce( function(elt1, elt2){ return elt1 + elt2;      }    );


function sherlock() {
    'use strict';

    var t = [1, 2, 3, 3];
    var tLength = t.length;

    var reponse = 'NO';

    var doSum = function (elt1, elt2) {
        return elt1 + elt2;
    };

    t.forEach(function (elt, idx, t) {
        var t1 = t.slice(0, idx);
        var t2 = t.slice(idx + 1, tLength);
        var pivot = t[idx];

        if (t1.length > 0 && t2.length > 0) {
            var sum1 = t1.reduce(doSum);
            var sum2 = t2.reduce(doSum);
            if (sum1 === sum2) {
                reponse = 'YES';
                return;
            }
        }
    });

    console.log(reponse);

}