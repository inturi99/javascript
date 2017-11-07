var looping = function(n){
	var a = 0, b = 1, f = 1;
	for(var i = 2; i <= n; i++){
		f = a + b;
		a = b;
		b = f;
		console.log(f);
	}
	return f;
}


var recursive = function(n) {
    if(n <= 2) {
        return 1;
    } else {
        return this.recursive(n - 1) + this.recursive(n - 2);
    }
};



var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};