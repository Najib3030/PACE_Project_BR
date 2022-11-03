from pyzabbix import ZabbixAPI

# Connect to our AWS instance
zapi = ZabbixAPI('https://13.238.217.71/')
# Disable SSL
zapi.session.verify = False
# Login using credentials
zapi.login("Admin", "1Wg246sDQNe6S+dcZVk")
print("Connected to Zabbix API Version %s" % zapi.api_version())

for h in zapi.host.get(output="extend"):
    print(h['host'])
