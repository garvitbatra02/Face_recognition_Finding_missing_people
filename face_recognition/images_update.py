import os

# code to update image in image folder everytime code is ran
target='./images/'

def makenew():
    for x in os.listdir(target):
        if(x.endswith('.png')):
            os.unlink(target+x)