# The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

# Examples
# "din"      =>  "((("
# "recede"   =>  "()()()"
# "Success"  =>  ")())())"
# "(( @"     =>  "))((" 

# input is a string
# capitalization is ignored - toLowerCase might be needed
# spaces and unique characters are possible
# are numbers able to appear? 
# 

# brute force
# iterate over string 
# if index of character doesn't equal the character from the back of the string (lastIndexOf) or using substring from current index to end.
#   then there are duplicates and character should be opening parens
# otherwise should be closing parens


def parentheses_replace(str):
    result = ''
    str = str.lower()
    for char in str:
        if str.count(char) > 1:
            result += ')'
        else:
            result+='('
    return result
# print(parentheses_replace('din'), '(((')
print(parentheses_replace('recede'), '()()()')
# print(parentheses_replace('Success'), ')())())')