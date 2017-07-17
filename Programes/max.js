var a = [10, 20, 30, 40, 50];
var max = a.reduce(function (a, b) {
return Math.max(a, b)
});
var max1 = function(arr){
var m  = arr[0];
for (var i = 1; i < arr.length; i++) {
if(arr[i] > m) {
    m =arr[i];
}
}
return m;
}

alert(max1(a));
