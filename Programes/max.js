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

document.write(max(a));


var max1 = a.reduce(function (a, b) {
return Math.max(a, b)
});

document.wirte(max1(a));

