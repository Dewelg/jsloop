//question1 = Write a for loop that prints 0-10

/*function printNum(){
    for(let i = 0; i <= 10; i++){
        console.log(i);
    }

}

printNum();

//question2 = write a for loop that list only even numbers

//first attempt
function evenNums(){
    for (let i = 0; i <= 100; i++){
        console.log(i % 2 == 0);
    }
}

evenNums();

//correct answer
function printEven() {
    for (var i=0;i<=100;i++){
      if(i%2==0){
        console.log(i); //print even number
    }  
}
}
printEven(); //12 22 48 66 100*/

//number3 = Write a JS code to delete all occurrence of element in given array

//attempt one, didn't know what to do from here
function deleteElement(){
    for(let i = 0; i < Array.length; i++){

    }
}

//correct answer
function deleteElement(arr, ele) {
    for (let i=0;i<arr.length;i++){
      if(arr[i]==ele){
        arr.splice(i,1); //Delete element from array
      }
    }
    return arr;
  }
  let arr = [23,56,4,78,5,63,45,210,56];
  arr = deleteElement(arr, 56)
  
  console.log(arr); //[23, 4, 78, 5, 63, 45, 210]
