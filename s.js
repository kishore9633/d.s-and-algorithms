//
// var twoSum = function(nums, target) {
//    
//     let result=[];
//     for (var i=0; i<=nums.length; i++){
//        
//         for(var j =i+1; j<nums.length; j++){
//
//            
//             if(nums[i]+nums[j]==target){
//                 result.push(i);
//                 result.push(j);
//             }
//         }
//     }
//     return result;
//    
// };
// console.log(twoSum([2,7,11,15],9));
//const humans = {
//    age:10,
//    grow:()=>{
//        this.age++;
//
//    },
//
//}
//humans.grow();
//console.log(humans.age);
//let a = [1,2,3,4,5,6,7];
//let b=[];
//for (var i =0; i<=a.length;i++){
//  b=b+a[i];
//}
//console.log(b);
const number = parseInt(prompt('Enter the number of terms: '));

function fibonacci(number) {
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 0; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
}
fibonacci(6);
