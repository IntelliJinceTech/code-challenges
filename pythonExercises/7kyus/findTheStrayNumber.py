# DESCRIPTION:
# You are given an odd-length array of integers, in which all of them are the same, except for one single number.

# Complete the method which accepts such an array, and returns that single different number.

# The input array will always be valid! (odd-length >= 3)

# Examples
# [1, 1, 2] ==> 2
# [17, 17, 3, 17, 17, 17, 17] ==> 3

def stray(arr):
    # create hashmap for occurrences
    # when hashmap value occurence is greater than 1, return the key with value 1
    # map = {}
    # for num in arr:
    #     if num in map:
    #         map[num] += 1
    #     else:
    #         map[num] = 1
    # return [key for key, value in map.items() if value == 1][0]
    
    for num in arr:
        if arr.count(num) == 1:
            return num
    
        
print(stray([1,1,2]), 2)
print(stray([17, 17, 3, 17, 17, 17, 17]), 3)
