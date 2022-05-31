#!usr/bin/python3
def main():
 for x in range(10):
     for y in range(x + 1, 10):
         print("{}".format(str(x) + str(y)), end="")
         if int(str(x) + str(y)) < 89:
              print(", ", end="")
print("")
main()
