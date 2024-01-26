board = [["-", "-", "-"],
         ["-", "-", "-"],
         ["-", "-", "-"]]

print(board[0])
print(board[1])
print(board[2])

col=0
row=0
playerTurn = "X"

for counter in range(1,10):
    col = int(input(playerTurn + " player, select a column 1-3: "))
    row = int(input(playerTurn + " player, select a row 1-3: "))
    col -= 1
    row -= 1

    if board[row][col] == '-':
        board[row][col] = playerTurn
    else:
        print("Oops, that spot was already taken. ")
    print(board[0])
    print(board[1])
    print(board[2])
