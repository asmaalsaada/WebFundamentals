function sigma(num){
    var sum =0;
    for (var i =0; i<=num ; i++){
        if(num>0){
            sum+=i;
        }
    }
    return sum ;
}console.log(sigma(5));

function Factorial (num){
    var mul =1;
    for (var i = 1; i<=num ; i++){
        if(num>0){
            mul*=i;
        }
    }
    return mul;
} Factorial();

console.log(Factorial (5));

function fibonacci(index) {
	var fib = [0, 1];
	for (var i = 2; i < index + 1; i ++) {
		fib.push(fib[i - 2] + fib[i - 1]);
	}
	return fib[index];
}

console.log(fibonacci(index));
/* To test the code :
var index =6;*/


function secondToLast(arr){
    if(arr.length<2){
        return null;
    }
        return  arr[arr.length-2];
    
}
secondToLast(ar);


function NToLast(arr,y){
    if(y > 0 && arr.length<2){
        return 0;
    }
    
        return arr[arr.length-y];
}
NToLast(,);


function secondLargest(arr){
   var max = Math.max(...arr);
    for (var i=0; i<arr.length;i++)
            {
            if (arr[i]==max) 
                    {
                            arr.splice(i, 1); 
                    }
            }
            max = Math.max(...arr);
            console.log(max);
        } secondLargest([1,3,5,6]); 

function doubleTrouble(arr){
    var newArr=[];
    for (var i=0; i<arr.length;i++)
    {
        newArr.push(arr[i]);
        newArr.push(arr[i]);

    }
console.log(newArr);
} doubleTrouble([4, "Ulysses", 42, false]); //output:


