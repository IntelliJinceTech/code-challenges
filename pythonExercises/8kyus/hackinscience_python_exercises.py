def sum_fizz_buzz_alt(end):
    return (print([i for i in range(end) if i % 3 == 0 or i % 5 == 0]))
    
print(sum_fizz_buzz_alt(100))