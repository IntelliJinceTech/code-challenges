# input letter --> convert to lowercase
# output is string with position  "Position of alphabet:1"  (space after colon? yes)


# lowercase ascii string to list
# or return difference between ascii numbers and a + 1?

def position(alphabet):
    return f'Position of alphabet: {ord(alphabet) - ord("a") +1}' 

print(position('a'), 'Position of alphabet: 1')
print(position('z'), 'Position of alphabet: 26')