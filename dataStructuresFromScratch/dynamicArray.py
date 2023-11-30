# class DynamicArray:
    
#     def __init__(self, capacity: int):
        

#     def get(self, i: int) -> int:


#     def set(self, i: int, n: int) -> None:


#     def pushback(self, n: int) -> None:


#     def popback(self) -> int:
 

#     def resize(self) -> None:


#     def getSize(self) -> int:
        
    
#     def getCapacity(self) -> int:
        

class DynamicArray:
    
    #initialize
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.length = 0
        self.arr = [0] * capacity
        
    # getting a value
    def get(self, i: int) -> int:
        return self.arr[i]

    #setting a value
    def set(self, i: int, n: int) -> None:
        self.arr[i] = n
    
    # inserting a value    
    def pushback(self, n: int) -> None:
        if self.length == self.capacity:
            self.resize()
    
        # adding the value in the next empty position
        self.arr[self.length] = n
        self.length += 1
        
    # remove the last element    
    def popback(self) -> int:
        if self.length >0:
            self.length -=1
        
        return self.arr[self.length]

    # gotcha here
    def resize(self) -> None:
        self.capacity = 2 * self.capacity
        new_arr = [0] * self.capacity
        
        # copy elements to new_arr
        for i in range(self.length):
            new_arr[i] = self.arr[i]
        self.arr = new_arr

    def getSize(self) -> int:
        return self.length
    
    def getCapacity(self) -> int:
        return self.capacity