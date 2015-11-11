/**
 * Created by INTURI on 09-04-2014.
 */
function sort(list){
    var comparison= 0,
    swaps= 0;
    for(var i= 0,swapping ;i < list.length-1; i++){
      if(list[i]>list[i+1]){
          swapping=list[i+1];
          list[i+1]=list[i];
          list[i]=swapping;
          swaps++;
      };
    };
    console.log("Bubble sort first pass");
    console.log("Comparisons :"+comparison);
    console.log("Swaps :"+swaps);
    return list;

}