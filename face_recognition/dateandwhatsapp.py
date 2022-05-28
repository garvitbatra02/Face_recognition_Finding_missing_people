
import requests

def sendmessage(number,name,adhaar,location):
    city=location['city']
    region=location['region']
    country=location['country']
    latitude=location['latitude']
    longitude=location['longitude']
    message=f"your Dear one with name {name} bearing adhaar number {adhaar} has been found at a location country:{country} region:{region} latitude:{latitude} longitude:{longitude} city:{city} regards FindOne"
    url = "https://api.ultramsg.com/instance7517/messages/chat"

    payload = f"token=uf5xnwpeveeinoh9&to=+91{number}&body="+message+"&priority=1&referenceId="
    headers = {'content-type': 'application/x-www-form-urlencoded'}

    response = requests.request("POST", url, data=payload, headers=headers)

    print(response.text)    

