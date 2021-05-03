function biggie(arr){
    for (var i=0; i<arr.length;i++) { 
        if (arr[i]>0) {
            arr[i]='big';
        } 
    } 
    return arr; 
} biggie([-1,3,5,-5]);

function printLowReturnHigh(arr){
    var max= Math.max(...arr);
    var min= Math.min(...arr);
    for (var i=0; i<arr.length;i++) {
    } 
    console.log(min); 
    return max;
} printLowReturnHigh([-1,3,5,-5]); //output : -5, 5


function printOneReturnAnother(arr){
    console.log(arr[arr.length-2]);
        for(var i=0;i<arr.length;i++)
        {
        if(arr[i]%2!=0)
        {
        console.log(arr[i]);
        break;
        }
        }
} printOneReturnAnother([-1,3,5,-5]); //ouput: 5,-1

function doubleVision(arr){
    var double=[];
    for(var i=0;i<arr.length;i++)
            {
            double.push(arr[i]*arr[i]);
            } console.log(double);
    } doubleVision([-1,3,5,-5]); // output:[ 1, 9, 25, 25 ]
r
    function countPositives(arr){
        var counter=0;
            for(var i=0;i<arr.length;i++)
                {
                    if (arr[i]>0)
                    counter++;
                    
                } console.log(arr[arr.length-1]=counter)
                console.log(arr);
    }countPositives([-1,3,5,-5]); //ouput: [-1,3,5,2] 

// function evensAndOdds(arr){
//     var oddCount=0;
//     var evenCount=0;
//     for(var i=0;i<arr.length;i++)
//                 {
//                 if (arr[i]%2==0){
//                 evenCount++;
//                 }
//                 if (arr[i]%2!=0) {
//                     oddCount++;
//                 }
//                 }
//                 if (evenCount =3)
//                 console.log(Even more so!)
//                 if (evenCount =3)
//                 console.log(That's odd!)
// } evensAndOdds([1,3,7,9,2,4,6]); //

function incrementTheSeconds(arr){
    for(var i=0;i<arr.length;i++) 
    {
    if (arr[i]%2!=0) 
    arr[i]+=1;
    } console.log(arr)
} incrementTheSeconds([3,4,7,8,5,9]); //output [4,4,8,8,6,10]

// function previousLength(arr){
//     for(var i=0;i<arr.length;i++) 
//     {
//         arr[i]=str.indexOf()
//     }
//     console.log(arr)
// } previousLength([hello!, coding is fun]);

function addSeven(arr){
    var se7en=[];
    for(var i=0;i<arr.length;i++) 
    {
        se7en[i]=arr[i]+7;
        
    } console.log(se7en);
} addSeven([1,2,3]); //output [8,9,10]

// function reverseArray(arr){
//     var temp;
//     for(var i =  arr.length -1; i >= 0; i--)
//         {
//             arr.push(arr[i]);
//         } console.log(arr);
//     } reverseArray([3,1,6,4,2]); //output [3, 1, 6, 4, 2, 2, 4, 6, 1, 3]  

function outlookNegative(arr){
    var newArray=[];
    for(var i=0;i<arr.length;i++)
    {
        if (arr[i]>0 ) 
        {
    newArray.push(arr[i]*-1);
    } else if (arr[i]<0) 
        {
        newArray.push(arr[i]);
        }
} return newArray;
} outlookNegative([1,-3,5]);  //output: [-1,-3,-5]

function alwaysHungry(arr){
    for(var i=0;i<arr.length;i++) 
    {
        if (arr[i]=='food') 
        {
                console.log("yummy");
        } else if  (arr[i]!='food') 
                console.log("I'm hungry");
    }
} alwaysHungry(['food','not food', 'food']); //output: yummy, I'm hungry, yummy

// function swapTowardsTheCenter(arr){
//     var y=1;
//     for(var i=0;i<arr.length-1;i+2) 
//     {
//             temp=arr[i];
//             arr[i]=arr[arr.length-y];
//             arr[arr.length-y]=temp;
//                         y-2;
//                   console.log(arr);
//     } 
//     } swapTowardsTheCenter([1,2,3,4,5,6]); 

function scaleTheArray(arr, num){
    for (var i=0; i<arr.length;i++) {   
    arr[i]=arr[i]*num
    } console.log(arr);
    return arr;
} scaleTheArray([1,2,76], 3); //output: [3,6,228]


