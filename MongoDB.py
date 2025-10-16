from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://sample:sample_1@cluster0.eupka0h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri)

# Send a ping to confirm a successful connection
db  = client["my_db"]
col = db["students"]

# col.insert_one({"name":"sreemann","age":19})


# col.insert_many([{"name":"Arnold","age":19},{"name":"darvin","age":19}])

# print(col.find_one({"name":"sreemann"}))
# col.update_one({"name":"sreemann"},{"$set":{"age":20}})
col.delete_one({"name":"Arnold"})
for doc in col.find():
    print(doc)