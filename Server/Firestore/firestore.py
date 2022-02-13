import firebase_admin
from firebase_admin import credentials
from firebase_admin import db


cred = credentials.Certificate("/home/daniel/Documents/Firebase/ibdb-6c905-firebase-adminsdk-bfpnb-f1b76649e3.json")
firebase_admin.initialize_app(cred, {'databaseURL' : 'https://ibdb-6c905-default-rtdb.asia-southeast1.firebasedatabase.app/'})

ref = db.reference('subjects/physics') 
print(ref.get()) # if not printing check cred
print("________________________________________")



