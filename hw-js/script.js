//HW #1

for(let i=1; i<=20; i++){
    if(i%2==0){
        document.write(i+"<br>");
    }
    else {
        document.write(i+" ");
    }
}

let j=2;
for(let i=1; i<=20; i+=2){
    console.log(i+" "+ j);
    j+=2;
}

//HW #2

function sumMinMax(arr){
    let max = -Infinity;
    let min = Infinity;
    let sum = 0;

    for(let i=0; i<arr.length; i++){
        if(!isNaN(arr[i])){
        if(arr[i]>max){
            max = arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
    }
}
    sum = max + min;
    console.log(`The sum of the MIN and MAX is ${sum}`);
}
let arr1 = [3,'a',20 ,8,'c'];
sumMinMax(arr1);  

//HW 3
let fullArr = [];

function newStudents(arr1, arr2){
    let num = 1;
    for(let i=0; i<arr1.length ;i++){
        fullArr[i]=num+". "+arr1[i]+" "+arr2[i];
        num++;
    }
}

let first = ["Bob", "Jill", "Tim", "Mark"];
let last = ["Gregory", "Wurtz", "Cook", "Zuck"];

newStudents(first, last);

for(let i=0; i<fullArr.length;i++){
    console.log(fullArr[i]);
    
}