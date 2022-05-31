#!/usr/bin/python3
def fizzbuzz():
    for k in range(1, 101):
        if (k % 15 == 0):
            print("FizzBuzz ", end="")
        elif (k % 3 == 0):
            print("Fizz ", end="")
        elif (k % 5 == 0):
            print("Buzz ", end="")
        else:
            print("{:d} ".format(k), end="")
