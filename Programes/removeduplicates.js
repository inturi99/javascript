var myArray = [1,1,2,2,3,4,2,1,6,6,7,8,8,9,9,9];

var remomeduplicates = function (arr) {
    var temp =[]
    for(var i=0; i < arr.length; i++){
    	if(temp.indexOf(arr[i]) == -1) {
    		temp.push(arr[i])
    	}
    }
    return temp	
}

remomeduplicates(myArray)

var result= myArray.filter(function(value,index,array) {
	return  array.indexOf(value) == index;
});
