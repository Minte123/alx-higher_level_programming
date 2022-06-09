# Python - More Data Structures: Set, Dictionary

## Resources
Read or watch:
 * Data structures <https://alx-intranet.hbtn.io/rltoken/GmgoSUtBbHBW8suWkws51g>
 * Lambda, filter, reduce and map <https://alx-intranet.hbtn.io/rltoken/53f4kKVT0-jyzrJstOSJWg>
 * Learn to Program 12 Lambda Map Filter Reduce <https://alx-intranet.hbtn.io/rltoken/v9eyFryhkYmxDI13iTx2VA>

man or help:
 * python3 

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

### General
 * Why Python programming is awesome
 * What are sets and how to use them
 * What are the most common methods of set and how to use them
 * When to use sets versus lists
 * How to iterate into a set
 * What are dictionaries and how to use them
 * When to use dictionaries versus lists or sets
 * What is a key in a dictionary
 * How to iterate over a dictionary
 * What is a lambda function
 * What are the map, reduce and filter functions
### Copyright - Plagiarism
 * You are tasked to come up with solutions for the tasks below yourself to meet with the above learning objectives.
 * You will not be able to meet the objectives of this or any following project by copying and pasting someone else’s work.
 * You are not allowed to publish any content of this project.
 * Any form of plagiarism is strictly forbidden and will result in removal from the program.
## Requirements
### General
 * Allowed editors: vi, vim, emacs
 * All your files will be interpreted/compiled on Ubuntu 20.04 LTS using python3 (version 3.8.5)
 * All your files should end with a new line
 * The first line of all your files should be exactly #!/usr/bin/python3
 * A README.md file, at the root of the folder of the project, is mandatory
 * Your code should use the pycodestyle (version 2.8.*)
 * All your files must be executable
 * The length of your files will be tested using wc

## Tasks :page_with_curl:

* **0. Squared simple**
  * [0-square_matrix_simple.py](./0-square_matrix_simple.py): Python function that computes
  the square value of all integers of a matrix.
  * The parameter `matrix` is a two-dimensional array.
  * Returns a matrix of the same size as `matrix` where each value is the
  square of the input value.
  * The initial matrix is not modified.
  * Without importing modules.

* **1. Search and replace**
  * [1-search_replace.py](./1-search_replace.py): Python function that replaces all occurences
  of an element by another in a new list.
  * The parameter `my_list` is the initial list.
  * The parameter `search` is the element to replace in the list.
  * The parameter `replace` is the new element.
  * Without importing modules.

* **2. Unique addition**
  * [2-uniq_add.py](./2-uniq_add.py): Python function that adds all unique integers in
  a list (once for each integer).
  * Without importing modules.

* **3. Present in both**
  * [3-common_elements.py](./3-common_elements.py): Python function that returns a
  set of common elements in two sets.
  * Without importing modules.

* **4. Only differents**
  * [4-only_diff_elements.py](./4-only_diff_elements.py): Python function that returns a
  set of all elements present in only one set.
  * Without importing modules.

* **5. Number of keys**
  * [5-number_keys.py](./5-number_keys.py): Python function that returns the number of
  keys in a dictionary.
  * Without importing modules.

* **6. Print sorted dictionary**
  * [6-print_sorted_dictionary.py](./6-print_sorted_dictionary.py): Python function that
  prints a dictionary by ordered keys.
  * The function assumes all keys are strings.
  * Keys are printed in alphabetic order.
  * Keys are only sorted on the first level.
  * Dictionary values can have any type.
  * Without importing modules.

* **7. Update dictionary**
  * [7-update_dictionary.py](./7-update_dictionary.py): Python function that replaces or
  adds key/value pairs in a dictionary.
  * The parameter `key` is always a string.
  * The parameter `value` is any type.
  * If a key exists in the dictionary, the value is replaced.
  * If a key does not exist in the dictionary, it is created.
  * Without importing modules.

* **8. Simple delete by key**
  * [8-simple_delete.py](./8-simple_delete.py): Python function that deletes a key
  in a dictionary.
  * The paramter `key` is always a string.
  * If the key does not exist, the dictionary does not change.
  * Without importing modules.

* **9. Multiply by 2**
  * [9-multiply_by_2.py](./9-multiply_by_2.py): Python function that returns a
  new dictionary with all values multiplied by 2.
  * The function assumes all values are integers.
  * Without importing modules.

* **10. Best score**
  * [10-best_score.py](./10-best_score.py): Python function that returns a key value
  with the biggest integer value.
  * The function assumes all values are integers.
  * The function assumes all students have a different score.
  * If no score is found, the functino returns `None`.
  * Without importing modules.

* **11. Multiply by using map**
  * [11-mutiply_list_map.py](./11-multiply_list_map.py): Python function that returns a
  list with all values multiplied by a number using `map`.
  * Returns a new length of the same length has `my_list` with each value
  multiplied by `number`.
  * The initial list is not modified.
  * Without using loops or importing modules.

* **12. Roman to Integer**
  * [12-roman_to_int.py](./12-roman_to_int.py): Python function that converts a roman
  numeral to an integer.
  * The function assumes the number will be between 1-3999.
  * If the parameter `roman_string` is not a string or `None`, the function returns `0`.

* **13. Weighted average!**
  * [100-weight_average.py](./100-weight_average.py): Python function that returns the
  weighted average of all integers in a list of tuples.
  * Tuple format: `(<score>, <weight>)`.
  * If the list is empty - returns `0`.
  * Without importing modules.

* **14. Squared by using map**
  * [101-square_matrix_map.py](./101-square_matrix_map.py): Python function that computes
  the square value of all integers of a matrix using `map`.
  * The parameter `matrix` is a two-dimensional array.
  * Returns a new matrix of the same size as `matrix` with each value squared.
  * The initial matrix is not modified.
  * Without using loops or importing modules.

* **15. Delete by value**
  * [102-complex_delete.py](./102-complex_delete.py): Python function that deletes keys with
  a specific value in a dictionary.
  * If the value does not exists, the dictionary is not changed.
  * All keys having the searched value are deleted.
  * Without importing modules.

* **16. CPython #1: PyBytesObject**
  * [103-python.c](./103-python.c): C functions that print basic information about
  Python lists and Python bytes objects.
## Author
Mintesnot Mekonin 
