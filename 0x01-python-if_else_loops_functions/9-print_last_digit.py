#!/usr/bin/python3
def print_last_digit(number):
    n = int(repr(number)[-1])
    print("{}".format(n), end="")
    return n
