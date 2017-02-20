/**
 * Created by INTURI on 09-04-2014.
 */
/*
IS Number Prime
*/

var isprime = function(n){
  for(var i=2;i<n;i++){
    if(n % i == 0){
      return false;
    }
  } 
  return n > 1
}

for(var i=0; i<=100;i++){
  if(isprime(i)){
    console.log(i)
  }
}

var primenumbers = function(n1,n2){
  for (var i = n1; i <=n2; i++){
    if(isprime(i)){
      console.log(i)
    }
  }
}
/*

*/

var primenumbers1 = function (n1,n2){
    var i=0;
    var j=0;
   for(i=n1+i;i<n2;i++){
       var flag=0;
       for(j=2;j <=i/2;++j){
           if(i%2 == 0){
               flag=1;
               break;
           }
       }
       if(flag == 0)
       console.log(i);
   }
    return 0;
}