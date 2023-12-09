
#! Anagram Exercise

# 2 strings, s and t
# length of input is always at least 1
# spaces?

# output is boolean True or False

# queue
# reverse the string and match it with other string

def anagram_checker(s, t):
    return t== s[::-1]

# print(anagram_checker('tar', 'rat'), True)
# print(anagram_checker('tear', 'rat'), False)
# print(anagram_checker('racecar', 'racecar'), True)
# print(anagram_checker('i heard you called', 'dellac uoy draeh i'), True)

#! Two Number Sum


# ! Odd length array - find the single different number
# create a dictionary 
# iterate over array
# if number doesn't exist, add as number = 1
# if it exists - add to number
# return the single digit number that has value of 1

def single_digit_finder(number_list):
    # count_dict = {}
    # for num in number_list:
    #     if num in count_dict:
    #         count_dict[num] += 1
    #     else:
    #         count_dict[num] = 1
    # return {key for key, value in count_dict.items() if value == 1}.pop()
    for num in number_list:
        if number_list.count(num) == 1:
            return num

print(single_digit_finder([1,2,1]), 2)
print(single_digit_finder([17, 17, 17, 3]), 3)

