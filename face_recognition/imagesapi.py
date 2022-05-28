from PIL import Image
from io import BytesIO
import io
from numpy import byte
import requests
import json
from images_update import makenew
def getimages():
  url="http://localhost:5000/api/missingpeople/getallpersons"
  mydata=requests.get(url)
  finaldata=mydata.json()
  makenew()
  for i  in range(0,len(finaldata)):
    fdata=finaldata[i]['image']['data']['data']
    newobj=byte(fdata)

    newname=finaldata[i]['name']+'_'+finaldata[i]['adhaar_number']
    img=Image.open(io.BytesIO(newobj))
    img.save("./images/"+newname+".png")
  # print(newname)

