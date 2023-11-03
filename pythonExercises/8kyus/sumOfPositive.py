# You get an array of numbers, return the sum of all of the positives ones.

# Example [1,-4,7,12] => 1 + 7 + 12 = 20

# Note: if there is nothing to sum, the sum is default to 0.

# input is a list
# output is a number
# output is sum from all positive numbers
# if no values in list, sum is 0

def positive_sum(arr):
    return sum([num for num in arr if num > 0])
    
print(positive_sum([-1,1,3,5,7]), 16)