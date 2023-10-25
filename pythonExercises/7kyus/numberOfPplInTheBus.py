    # input is a list of integer pairs
    # in each pair in the list, 
        # first number: number of ppl that get on the bus
        # second number: number of people that get off the bus
    # all numbers are positive. 
    
    # declare variable count
    # iterate over list 
    # first number of element is always added to count
    # second number is always subtracted from count
    # 
    
def number(bus_stops):
    # count = 0
    # for stop in bus_stops:
    #     count += stop[0]
    #     count-= stop[1]
    
    # return count
    return sum([stop[0] - stop[1] for stop in bus_stops])

print(number([[10,0],[3,5],[5,8]]),5)