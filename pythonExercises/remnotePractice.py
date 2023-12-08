# anagram exercise

# 2 strings, s and t
# length of input is always at least 1
# spaces?

# output is boolean True or False

# queue
# reverse the string and match it with other string

def anagram_checker(s, t):
    return t== s[::-1]

print(anagram_checker('tar', 'rat'), True)
print(anagram_checker('tear', 'rat'), False)
print(anagram_checker('racecar', 'racecar'), True)
print(anagram_checker('i heard you called', 'dellac uoy draeh i'), True)