// var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
//   var map2 = map1.set('b', 50);
//   console.log(map1.get('b')); // 2
//   console.log(map2.get('b')); // 50

require(['https://cdnjs.cloudflare.com/ajax/libs/immutable/3.8.2/immutable.min.js'], function (Immutable) {
    // var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
    // var map2 = map1.set('b', 50);
    // console.log(map1.get('b')); // 2
    // console.log(map2.get('b')); // 50
    var arr = [11, 22, 345, 45, 2344, 23432];
    var n = 6;
    var k = 2;
    var count = countkdigitNumbers(arr, n, k);
    function countkdigitNumbers(arr, n, k){
        var count1 = 0;
        var digitCount = 0;
        var temp = 0;
        for(var i=0; i<n; i++){
            var count1 = 0;
            temp = arr[i];
            console.log("\n");
            console.log(temp, 'arr temp');
            while(temp !== 0){
                if (temp < 1) {
                    break;
                }
                temp = temp/10;
                    console.log("\n");
                    console.log(temp, 'temp/10');
                    count1++;
                    console.log("\n");
                    console.log(count1, 'count1');

            }
            if(count1 === k) {
                digitCount++;
                console.log("\n");
                console.log(digitCount, 'digitCount');
            }
        }
        return digitCount;
    }
    console.log(count, 'count of k');
    });