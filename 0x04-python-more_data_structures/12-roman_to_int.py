#!/usr/bin/python3
def roman_to_int(roman_string):

    if roman_string is None or (not isinstance(roman_string, str)):
        return 0
    d = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
    sym = list(roman_string)
    tot = 0
    for i in range(len(sym)):
        if sym[i] not in list(d):
            return 0
        if (i != len(sym) - 1) and d.get(sym[i]) >= d.get(sym[i + 1]):
            tot = tot + d.get(sym[i])
        elif i == len(sym) - 1:
            tot = tot + d.get(sym[i])
        else:
            tot = tot - d.get(sym[i])
    return tot
