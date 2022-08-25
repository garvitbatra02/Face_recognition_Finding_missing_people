
import requests
from dateandwhatsapp import sendmessage
from getlocationinfo2 import getlocation

mylocation=getlocation()

# code to add data of the missing person to the data base using the node js API manually developed


#since name of the missing person can be same for many like shivam,ramesh in India ,hence data using adhaar card number after the name in form   (name_adhaarcardnumber) data has been split and added to data base 


def add_in_base(a):
    idx=0
    actual_name=""
    adhaar=""
    for i in range(len(a)-1, 0-1, -1):
        if(a[i]=='_'):
            idx=i
            break
    
    for i in range(0,idx):
        actual_name+=a[i]
    
    for i in range(idx+1,len(a)):
        adhaar+=a[i]

    # print(adhaar)
    # print(actual_name)

    dataval={
        "name":actual_name,
        "adhaar":adhaar,
        "locationval":mylocation
        }
    

    # headers={'Content-Type':'application/json'}
    # print(dataval)
    r= requests.post(url="http://localhost:5000/api/foundlocation/addlocation",json=dataval)
    print(r.text)


    newr=requests.get(url=f"http://localhost:5000/api/missingpeople/getallpersons/{adhaar}");
    # print(newr.text['phonenumber'])
    newrdata=newr.json()
    print(newrdata[0]['phonenumber'])
    sendmessage(newrdata[0]['phonenumber'],actual_name,adhaar,mylocation)


