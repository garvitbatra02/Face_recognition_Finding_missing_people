import os

target='./images/'

def makenew():
    for x in os.listdir(target):
        if(x.endswith('.png')):
            os.unlink(target+x)