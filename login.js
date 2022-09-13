//Prime Problem

let num= 15;

 let count = 0;

for(i=0; i<=num; i++){
  
   if(num%2==0){
  
  count++;}

  if(count==2){
console.log("Prime Number");}
else{
console.log("Not prime");}}



//Palindrome problem

let str= "Himanshu";
let bag= "";

for( let i=str-1; i>=0; i--){

  bag= bag + str[i];}
if(str==bag){
console.log("Yes");}
else{
console.log("No");}}