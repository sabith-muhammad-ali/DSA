// // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  leetCode 1. Two Sum  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// //  You may assume that each input would have exactly one solution, and you may not use the same element twice.
// //  You can return the answer in any order.

// // Example 1:
// // Input: nums = [2,7,11,15], target = 9
// // Output: [0,1]
// // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// // Example 2:
// // Input: nums = [3,2,4], target = 6
// // Output: [1,2]

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
// };
// // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// // if the number I'm targeting is 6, and I have the array [1, 2, 6, 8, 45, 7, 6, 12, 6, 76, 43, 6],
// // I want all the 6s to be moved to the end of the array while maintaining the order of other elements.
// let target = 6;
// let arr = [1, 2, 6, 8, 45, 7, 6, 12, 6, 76, 43, 6];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//         arr.splice(i, 1); 
//         arr.push(target); 
//     }
// }
// console.log("output:", arr);

// // another way
// let target1 = 6;
// let arr1 = [1,6,3,2,5,6,9,7,8,6];
// for(let i = 0; i < arr1.length; i++) {
//     if(arr1[i] === target1){
//         for(let j = arr1.length-1; j > i; j--){
//             if(arr1[j] != target1) {
//                 let temp = arr1[i]
//                 arr1[i] = arr1[j]
//                 arr1[j] = temp
//                 break;
//             }else {
//                 continue;
//             }
//         }
//     }
// }
// console.log("output:",arr1);
// // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// set 
// const set = new Set([1,2,3]);
// console.log(set.size);
// set.add(4)
// set.add(4)
// console.log(set.has(4))
// set.delete(3) 
// set.clear()

// for(const item of set) {
//   console.log(item);
// }