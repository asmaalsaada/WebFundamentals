function get1To255(){
    var arr=[];
    for (var i=0;i<255;i++) 
    {
        arr.push(i);
    }console.log(arr);
} get1To255(); 

function getEven1000(){
    var sum=0;
    for (var i=0;i<=1000;i++) {
    if (i%2==0) 
            sum+=i;
    } console.log(sum);
} getEven1000();

function sumOdd5000(){
    var sum=0;
    for (var i=0;i<=5000;i++) {
    if (i%2!=0) 
            sum+=i;
    } console.log(sum);
} sumOdd5000();

function iterateArray(arr){
    var sum=0;
for (var i=0; i<arr.length;i++){
        sum+=arr[i];
} console.log(sum);
}iterateArray([1,2,5]); // output=8

function findMax(arr) {

    var max= Math.max(...arr);
    for(var i=0; i<arr.length;i++){
    }  console.log(max);
} 
findMax([-3,3,5,7]); //output=7

function findAverage(arr){
    var sum=0;
for(var i=0; i<arr.length;i++){
    sum+=arr[i];
}
    var avr= sum/arr.length;
    return avr;
} findAverage([1,3,5,7,20]); //output :7.2


function oddArray50(){
    var arr=[];
    for (var i=0;i<=50;i++) 
            if (i%2!=0) {
                arr.push(i);
    }console.log(arr);
} oddArray50();  

function greaterThanY(arr, Y){
    for (var i=0; i<arr.length; i++) {
    if (arr[i]>Y) 
    return i;
    } 
}greaterThanY(([1, 3, 5, 7]), 3);

function squares(arr){
    for (var i=0; i<arr.length;i++) {   
    arr[i]=arr[i]**2
    } console.log(arr);
    return arr;
} squares([1,5,10,-2]);

function negative(arr){
    for (var i=0; i<arr.length;i++) { 
        if (arr[i]<0) {
            arr[i]=0;
        } 
    } 
    return arr; 
} negative([1,5,10,-2]);
function maxMinAvr(arr){
    var newArr=[];
    var max= Math.max(...arr);
    var min= Math.min(...arr);
    var sum=0;
    for(var i=0; i<arr.length;i++){
        sum+=arr[i];
    var avr= sum/arr.length; 
    }
    newArr[0]=max;
    newArr[1]=min;
    newArr[2]=avr;
    return newArr;
} maxMinAvr([1,5,10,-2]);

function swapValues(arr){
    temp = arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
return arr;
} swapValues([1,5,10,-2]) 

function negative(arr){
    for (var i=0; i<arr.length;i++) { 
        if (arr[i]<0) {
            arr[i]='Dojo';
        } 
    } 
    return arr; 
} negative([-1,-3,2]);

