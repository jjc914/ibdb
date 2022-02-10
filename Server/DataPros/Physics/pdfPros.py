# pip install PyPDF2
from PyPDF2 import PdfFileReader, PdfFileWriter
# will put colors in when its not 01:30 in the morning

questions_path = "./PDF/PHYSICS-QS-MCQ-2016-MAY"
answer_path = "./PDF/PHYSICS-ANS-MCQ-2016-MAY"
# init json conf
data = {
    "subject" : "",
    "fileType" : "",
    "questionType" : "",
    "year" : "",
    "month" : "",
    "topic" : "",
    "img" : "",
    "text" : ""
}

def formatPath(filePath):
    # Formating the name for JSON output 
    path = filePath.split("/")
    # shut up it works
    for i in range(2):
        path.pop(0)

    unformattedName = path[0] #Setting var to last part of path
    formatted = unformattedName.split("-") 

    # Setting JSON values
    subject = formatted[0]

    fileType = formatted[1]
    questionType = formatted[2]
    year = formatted[3]
    month = formatted[4]

    data["subject"] = subject
    data["fileType"] = fileType
    data["questionType"] = questionType
    data["year"] = year

    print(fileType, questionType, year, month)
    print(data)


def readFileData(filePath)
formatPath(answer_path)

