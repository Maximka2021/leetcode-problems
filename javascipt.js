// Binary Tree Inorder Traversal

let inorderTraversal = function(root) {
    let stack = [];
    let res = [];

    while(root || stack.length){
        if(root){
           stack.push(root)
           root = root.left 
        }else{
            root = stack.pop();
            res.push(root)
            root = root.right;
        }
    }
    return res;
}

// Binary Tree Inorder Traversal

// Majority Element

    let majorityElement = function(nums){
        let map = new Map();
        for(let num of nums){
            if(map.has(nums)){
                let prev = map.get(num)
                map.set(num, prev + 1)
            }else{
                map.set(num, 1)
            }
            if(map.get(num) > nums.length / 2) return num
        }
    }

// Majority Element

// Count Odd Numbers in an Interval Range
    function countOdd(low, high){
        return Math.floor((high + 1) / 2) - Math.floor(low / 2)
    }
// Count Odd Numbers in an Interval Range

// Contains Duplicate
var containsDuplicate = function(nums) {
    let map = new Set();
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            return true;
        }
        map.add(nums[i], i)
    }
    return false;
}
//Contains Duplicate

//Best Time to Buy and Sell Stock
var maxProfit = function(prices) {
    let min = prices[0];
    let profit = 0;
    for(let i in prices){
        if(prices[i] < min){
            min = prices[i]
        }else if(prices[i] - min > profit){
            profit = prices[i] - min
        }
    }
    return profit
};
//Best Time to Buy and Sell Stock

//Two Sum
var twoSum = function(nums, target) {
    let map = new Map();
      for(let i in nums){
          let diff = target - nums[i];
          if(map.has(diff)){
              return [map.get(diff), i]
          }
          map.set(nums[i], i)
      }
  };
//Two Sum

//Add Binary
var addBinary = function(a, b) {
    const aInt = BigInt(`0b${a}`)
    const bInt = BigInt(`0b${b}`)
    return (aInt + bInt).toString(2)
};
//Add Binary

//Add to Array-Form of Integer
var addToArrayForm = function(num, k) {
    let arrInt = BigInt(num.join(''));
    k = BigInt(k)
    let sum = arrInt + k
    return sum.toString().split('')
};
//Add to Array-Form of Integer