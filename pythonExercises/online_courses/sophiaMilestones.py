# myVar1 = '3'
# myVar2 = '2'
# lines = int(myVar1) + int(myVar2)
# myStr = myVar2 + ' ' + myVar1 + '\n'
# result = lines * ('lines' + myStr)
# print(result)

# temp_Fahrenheit = 36
# if temp_Fahrenheit < 32:
#   print('It is cold outside')
# elif temp_Fahrenheit > 80:
#   print('It is hot outside')
# else:
#   pass
#   print('It must be a nice day')
#
# my_first_list = ['a', 'b', 'c']
# my_second_list = ['d', 'e', 'f', 'g']
# my_third_list = my_first_list * 3
# my_third_list.extend('h')
# print (my_third_list[5:])

# my_list = ['pear','orange','pineapple','apple','peach','kiwi','banana']
# my_other_list = my_list[1:5]
# my_other_list.sort()
# print(my_list)
# print(my_other_list)

# board = [["-", "-", "-"],
#          ["-", "-", "-"],
#          ["-", "-", "-"]]
#
# col = int(input("X player, select a column: "))
# row = int(input("X player, select a row: "))
#
# board[row][col] = "X"
# print(board[0])
# print(board[1])
# print(board[2])

# myNumber = -4
# while myNumber < 0:
#   myNumber +=1
#   if myNumber == 0:
#     print(0)
#     continue
#   print('T'+ str(myNumber))
# print('Blastoff!')

# multiples = []
# for outer in range(1,2):
#   multiples.append([])
#   for inner in range(1,3):
#     multiples[outer-1].append(inner)
# print(multiples)

# def outer_math(x):
#   y = x + 1
#   def inner_math():
#     z = x + y
#     return z
#   return inner_math()
# z = outer_math(2)
# print("z = ", z)

# my_list = [[9, 8], [7, 6], [5, 4], [3, 2]]
# my_list[1].sort()
# print(my_list)

# def recursive_2(num):
#  if num == 1:
#   return -5
#  return recursive_2(num - 1) + 9
# print('rec_2 ',recursive_2(5))

# multiples = []
#
# for outer in range(1,3):
#    multiples.append([])
#    for inner in range(1,3):
#       print(multiples)
#       multiples[outer-1].append(inner)
#
# print(multiples)

# my_first_list = ['a', 'b', 'c']
# my_second_list = ['d', 'e', 'f', 'g']
# my_third_list = my_second_list[0:1] + my_first_list[1:2]
# my_third_list.append('h')
# print (my_third_list[1:])

# multiples = []
# for threeD in range(1,3):
#  multiples.append([])
#  for twoD in range(1,3):
#   multiples[threeD-1].append([])
#   for oneD in range(1,3):
#    multiples[threeD-1][twoD-1].append(oneD)
# print(multiples)

class Planet:
    def __init__(self, name):
        self.name = name
        self.orbits_a_star = True
        self.mass_enough_to_form_a_sphere = True
        self.cleared_neighborhood_around_orbit = True

    def show_name(self):
        return f'I am planet {self.name}'


class Moon(Planet):
    def __init__(self, name, num_Moons):
        super().__init__(name)
        self.moons = num_Moons

    def show_moons(self):
        return f'I have {self.moons} moons'


P8wM = Moon('Jupiter', 79)
help(Moon)

import statistics
print(statistics.median([1, 33, 14, 25, 3]))