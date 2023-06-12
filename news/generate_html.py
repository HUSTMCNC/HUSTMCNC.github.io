import os
import re
files = os.listdir('content')
fd_header = open('header.html', 'r')
header = fd_header.read()
fd_header.close()

fd_tail = open('tail.html', 'r')
tail = fd_tail.read()
fd_tail.close()
for file in files:
    if not os.path.isdir(file):
        fd_content = open('content/' + file, 'r')
        content = fd_content.read()
        fd_content.close()
        file_name = file[7:]#'content' is delete
        with open(file_name, 'w') as fp:
            fp.write(header)
            fp.write(content)
            fp.write(tail)
