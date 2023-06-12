import os
import re
files = os.listdir('content')
fd_header = open('header.html', 'r')
header = fd_header.read()
fd_header.close()
for file in files:
    if not os.path.isdir(file):
        fd_content = open('content/' + file, 'r')
        content = fd_content.read()
        fd_content.close()
        file_name = file[7:]#'content' is delete
        with open('test' + file_name, 'w') as fp:
            fp.write(header)
            fp.write(content)
