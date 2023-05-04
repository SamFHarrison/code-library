// Given an array of numbers called `nums`
// write a function that returns 2 numbers from
// the array that equal the `target` value

const nums = [2, 7, 11, 15];
const target = 9;

function solution(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let result = target - nums[i];

    if (map.has(result)) {
      let resultIndex = map.get(result);
      return [nums[i], nums[resultIndex]];
    } else {
      map.set(nums[i], i);
    }
  }
}

console.log(solution(nums, target));
