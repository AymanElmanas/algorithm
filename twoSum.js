var twoSum = function(nums, target) {
    
    let  result =[];
       for (let i =0 ; i<=nums.length;i++ ){
           if(nums[i]+nums[i++] == target){
              
              result.push(i);
              }
       }
       return result;
       };
console.log(twoSum([2,7,11,15],target));