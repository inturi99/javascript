let maxthreenumbers =  (x, y, z) => (x > y & x > z) ? x : ( y > x & y > z) ? y : z

var max = function(arr){
var m  = arr[0];
for (var i = 1; i < arr.length; i++) {
if(arr[i] > m) {
    m =arr[i];
}
}
return m;
}
var a = [10, 20, 30, 40, 50];

var max1 = a.reduce(function (a, b) {
return Math.max(a, b)
});


document.write(max(a));

document.wirte(max1);

