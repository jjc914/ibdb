# Json
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import json
# To get the service account key, go the project settings on firebase get a priv k    ey from service accts
cred = credentials.Certificate("/home/daniel/Documents/Firebase/ibdb-6c905-firebas    e-adminsdk-bfpnb-f1b76649e3.json")
firebase_admin.initialize_app(cred, {'databaseURL' : 'https://ibdb-6c905-default-r    tdb.asia-southeast1.firebasedatabase.app/'})
# ___________________________________________________________________---



# Sample File /home/daniel/src/SchoolProjects/ibdb/Server/Subjects/physics/atomicPhysics/discreteEnergyAndRadioactivity
print ('import file dir relative to your terminal')
input_file = input('Enter file name: ')
pwd = input_file
print(pwd)

# Split file by /
file_split = input_file.split('/')
print (file_split)

subtopic_name = file_split[-1]
topic_name = file_split[-2]
subject_name = file_split[-3]

subjectRef = db.reference('Subjects/' + subject_name + '/' + topic_name + '/' + subtopic_name)

# Get IPFS file

ipfs = open(pwd + '/out.txt', 'r')
print (ipfs.readline())
