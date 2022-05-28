
import requests
from dateandwhatsapp import sendmessage
from getlocationinfo2 import getlocation

mylocation=getlocation()



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


# add_in_base("Garvit Batra_962601999947")

# import requests
# in_values = {'username':'Jack','password':'Hello'}
# res = requests.post('https://httpbin.org/post',data = in_values)
# print(res.text)