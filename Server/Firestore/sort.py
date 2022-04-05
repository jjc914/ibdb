# Json
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import json
import json as js
from enum import Enum
"""
TODO: Array of all file subjects 
TODO: 
"""

"""
Sample output 
    Question: "IPFS HASH",
    Answer: "Letter or string",
    Difficulty: 0,
    rightAns: 0, 
    wrongAns: 0

"""


# To get the service account key, go the project settings on firebase get a priv k    ey from service accts
# cred = credentials.Certificate("/home/daniel/Documents/Firebase/ibdb-6c905-firebase-adminsdk-bfpnb-f1b76649e3.json")
# firebase_admin.initialize_app(cred, {'databaseURL' : 'https://ibdb-6c905-default-rtdb.asia-southeast1.firebasedatabase.app/'})
# ___________________________________________________________________---

def parseDir(path):
   print(dir) 

# Sample File /home/daniel/src/SchoolProjects/ibdb/Server/Subjects/physics/atomicPhysics/discreteEnergyAndRadioactivity

# Split file by /
def parseFile():
    file_split = input_file.split('/')
    print (file_split)
    subtopic_name = file_split[-1]
    topic_name = file_split[-2]
    subject_name = file_split[-3]
    subjectRef = db.reference('Subjects/' + subject_name + '/' + topic_name + '/' + subtopic_name)

    # Get IPFS file

    ipfs = open(pwd + '/out.txt', 'r')
    print (ipfs.readline())


def makeJson(hash, answer): 
    print("json")

def main(): 


if __name__ == '__main__':
    print("Peepee poopoo")
    print("___________________________________________________________________") 
