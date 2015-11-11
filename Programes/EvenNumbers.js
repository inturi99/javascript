/**
 * Created by INTURI on 09-04-2014.
 */
function evenNumbers(n){
    var sum=0;
    for(var i=1;i<=n;i++){
        if(i%2==0){
           console.log(i);
           sum +=i;
        }
    }
    console.log(sum);
}