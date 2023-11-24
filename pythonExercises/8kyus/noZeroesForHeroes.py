# def no_boring_zeroes(n):
#     if n == 0:
#         return n
#     while n % 10 == 0:
#         n = n/10
#     return int(n)

# number input
# get rid of hanging zeroes

# split at 0 


# iterate while number is divisible by 10
# if divisible --> divide by 10
def no_boring_zeroes(n):
    
    while n % 10 == 0:
        n = n/10
    return int(n)

print(no_boring_zeroes(1450), 145)