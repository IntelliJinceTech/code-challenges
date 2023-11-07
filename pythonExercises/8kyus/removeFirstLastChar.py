# given a string with any sort of char
# output is the string without the first and last char

def remove_char(s):
    return s[1:len(s)-1]

print(remove_char('eloquent'), 'loquen')