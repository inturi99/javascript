/**
 * Created by INTURI on 09-04-2014.
 */
function primeNumbers(n1,n2){
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