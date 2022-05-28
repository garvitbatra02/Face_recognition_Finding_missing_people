import requests

def getlocation():
    r=requests.get("https://get.geojs.io/")

    ip_request=requests.get("https://get.geojs.io/v1/ip.json")
    ipAdd=ip_request.json()["ip"]

    # print(ipAdd)
    url="https://get.geojs.io/v1/ip/geo/"+ipAdd+".json"

    geo_request=requests.get(url)
    geo_data=geo_request.json()
    # print(geo_data)
    return geo_data
    # print(geo_data["country"])
    # print(geo_data["city"])
    # print(geo_data["region"])