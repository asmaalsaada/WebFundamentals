var testArr = [6,3,5,1,2,4]
function printValuesAndSum(){
    var sum=0;
    for (var i=0; i<testArr.length;i++){
        sum+=testArr[i];

    console.log("num : " + testArr[i] + " sum : " + sum);

}
} printValuesAndSum();

var testArr = [6,3,5,1,2,4]; 

function multiplyValueByPosition (){
var newArr=[];
for (var i=0; i<testArr.length;i++)
{
        newArr.push( testArr[i]* i)
} console.log(newArr);
} multiplyValueByPosition();