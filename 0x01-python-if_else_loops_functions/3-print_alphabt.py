#!/usr/bin/python3


def alpha():
    for k in range(97, 123):
        if k != 101 and k != 113:
            print('{}'.format(chr(k)), end='')


if __name__ == '__main__':
    alpha()
