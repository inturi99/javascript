var reverse = function(s) {
	var n = "";
	for(var i = s.length - 1 ; i >= 0; i--){
     n += s[i];
	}
  return n;
}

console.log(reverse("KRISHNA"));