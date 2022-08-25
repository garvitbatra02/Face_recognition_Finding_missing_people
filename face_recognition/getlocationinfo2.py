import requests


# code to get geographical data using geo API to detect location the person currently is

def getlocation():
    r=requests.get("https://get.geojs.io/")

    ip_request=requests.get("https://get.geojs.io/v1/ip.json")
    ipAdd=ip_request.json()["ip"]

    # print(ipAdd)
    url="https://get.geojs.io/v1/ip/geo/"+ipAdd+".json"

    geo_request=requests.get(url)
    geo_data=geo_request.json()
   
    return geo_data
   