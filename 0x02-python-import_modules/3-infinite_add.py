#!/usr/bin/python3
if __name__ == "__main__":
    from sys import argv
    num_args = len(argv)
    kim = 0
    for k in range(1, num_args):
        kim += int(argv[k])
    print("{:d}".format(kim))
