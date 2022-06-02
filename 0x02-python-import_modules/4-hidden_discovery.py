#!/usr/bin/python3


if __name__ == '__main__':
    import hidden_4

    h_dir_name_list = dir(hidden_4)
    for k in h_dir_name_list:
        if not k.startswith('__'):
            print('{:s}'.format(k))
