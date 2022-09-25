#!/usr/bin/python3
"""
    A python script that fetches URL using 'urlib'
"""

if __name__ == "__main__":
    from urllib.request import urlopen

    with urlopen("https://alx-intranet.hbtn.io/status") as response:
        html = response.read()
        print('Body response:')
        print('\t- type: {}'.format(type(html)))
        print('\t- content: {}'.format(html))
        print('\t- utf8 content: {}'.format(html.decode("utf-8", "strict")))
