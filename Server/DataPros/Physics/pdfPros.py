# pip install PyPDF2
from PyPDF2 import PdfFileReader, PdfFileWriter
# will put colors in when its not 01:30 in the morning

questions_path = "/PDF/PHYSICS-ANS-MCQ-2016-MAY.pdf"
answer_path = "/PDF/PHYSICS-ANS-MCQ-2016-MAY.pdf"
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


def readFileData(filePath):
    # Reading the file
    file = open(answer_path, "rb")
    pdf = PdfFileReader(file)
    # Getting the number of pages
    numPages = pdf.getNumPages()
    # Getting the text from the first page
    text = pdf.getPage(0).extractText()
    # Getting the image from the first page
    img = pdf.getPage(0).mediaBox
    # Getting the text from the last page
    text = pdf.getPage(numPages-1).extractText()
    # Getting the image from the last page
    img = pdf.getPage(numPages-1).mediaBox
    # Closing the file
    file.close()
    # Setting the data
    print(img)
    print(text)
    # data["img"] = img
    # data["text"] = text


readFileData(answer_path)