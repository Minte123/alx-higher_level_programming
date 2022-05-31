#!/usr/bin/python3


def remove_char_at(str, n):
    copy = ''
    if len(str) == 0:
        return str
    for x in range(len(str)):
        if x != n:
            copy += str[x]
    return copy


if __name__ == '__main__':
    print(remove_char_at("School of ALX", 3))
