
from pymongo import MongoClient


MONGO_URI = "mongodb+srv://Mohan:123@cluster0.3glyb3e.mongodb.net/?retryWrites=true&w=majority&tls=true"


with MongoClient(MONGO_URI) as client:
    # 3️⃣ Choose database and collection
    db = client["it_company"]          # Database
    employees = db["employees"]        # Collection

    # --- CREATE (Insert) ---
    emp_one = {"name": "Mohan", "age": 28, "role": "Software Engineer", "salary": 55000}
    res_one = employees.insert_one(emp_one)
    print("insert_one id:", res_one.inserted_id)

    emp_list = [
        {"name": "Asha", "age": 30, "role": "Project Manager", "salary": 75000},
        {"name": "Meena", "age": 25, "role": "UI Designer", "salary": 48000},
    ]
    res_many = employees.insert_many(emp_list)
    print("insert_many ids:", res_many.inserted_ids)

    # --- READ (Find) ---
    print("\nAll employees:")
    for e in employees.find():
        print(e)

    one_emp = employees.find_one({"name": "Mohan"})
    print("\nfind_one Mohan:", one_emp)

    # --- UPDATE ---
    upd = employees.update_one({"name": "Mohan"}, {"$set": {"salary": 60000}})
    print("\nupdate_one matched:", upd.matched_count, " modified:", upd.modified_count)

    # --- DELETE ---
    deleted = employees.delete_one({"name": "Meena"})
    print("\ndelete_one deleted_count:", deleted.deleted_count)

    # --- FINAL ---
    print("\nFinal docs in collection:")
    for e in employees.find():
        print(e)
#pip install pymongo