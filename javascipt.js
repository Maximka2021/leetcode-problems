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