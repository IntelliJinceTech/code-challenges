# Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

# If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

# All inputs will be valid.

# last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
# last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
# last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 

# str --> array of sorted words by last letter

# def sortByLastChar(str):
#     return sorted(str.split(), key=lambda word: word[-1])

# def sortByLastChar(str):
    # return sorted(str.split(), key=lambda x: x[-1])

def sortByLastChar(str):
    return sorted(str.split(), key=lambda word: word[-1])

print(sortByLastChar('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])