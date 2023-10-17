# Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

# input is a number integer
# output are strings 
# 15 = "Fizz Buzz"
# 3 = "Fizz"
# 5 = "Buzz"

def fizz_buzz_printer(num):
    for n in range(1,num):
        if n % 5 == 0 and n % 3 == 0 and n != 0:
            print("Fizz Buzz")
        elif n % 3 == 0:
            print("Fizz")
        elif n % 5 == 0: 
            print("Buzz")
        else:
            print(n)
            

print(fizz_buzz_printer(16))