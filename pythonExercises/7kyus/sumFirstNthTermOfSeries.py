# series

# input is an integer

# output is string of decimal with 2 decimal places 
# 

def series_sum(n):
    result = 0.0
    for i in range(n):
        result += 1/ (1 + i * 3)
    return str(round(result, ndigits=2))

# 1 - 1
# 2 --> 1 + 1/4
# 3 --> 1 + 1/4 + 1/7

print(series_sum(2), "1.25")