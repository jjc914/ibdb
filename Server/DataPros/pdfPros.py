# pip install PyPDF2
import os;
import sys;
import re;
from PyPDF2 import PdfFileReader, PdfFileWriter
# will put colors in when its not 01:30 in the morning

def readFile(path):
    file = open(path, 'rb')
    pdf = PdfFileReader(file, strict=False)
    numPages = pdf.getNumPages()
    text = ''
    for page in range(numPages):
        text += pdf.getPage(page).extractText() + '\n'
    file.close()
    # https://regexr.com/6f76h
    getQuestionsFromDocument(text)


def getQuestionsFromDocument(text):
    potentialMatches = re.findall('\d+(?=\.\s)', text)
    print(potentialMatches)

def getFileExtension(fileName):
    return file.split('.')[len(file.split('.')) - 1]

if __name__ == '__main__':
    rootDataPath = ""
    if sys.argv[1] == '-d':
        rootDataPath = sys.argv[2]
        if rootDataPath[len(rootDataPath) - 1] != '/':
            rootDataPath += '/'
    # for file in os.listdir(rootDataPath):
    #     if getFileExtension(file) == 'pdf':
    #         readFile(rootDataPath + file)
    readFile('Data/Mathematics_paper_1__TZ1_HL.pdf')

# init json conf
# data = {
#     "subject" : "",
#     "fileType" : "",
#     "questionType" : "",
#     "year" : "",
#     "month" : "",
#     "topic" : "",
#     "img" : "",
#     "text" : ""
# }
#
# def formatPath(filePath):
#     # Formating the name for JSON output
#     path = filePath.split("/")
#     # shut up it works
#     for i in range(2):
#         path.pop(0)
#
#     unformattedName = path[0] #Setting var to last part of path
#     formatted = unformattedName.split("-")
#
#     # Setting JSON values
#     subject = formatted[0]
#
#     fileType = formatted[1]
#     questionType = formatted[2]
#     year = formatted[3]
#     month = formatted[4]
#
#     data["subject"] = subject
#     data["fileType"] = fileType
#     data["questionType"] = questionType
#     data["year"] = year
#
#     print(fileType, questionType, year, month)
#     print(data)
#
#
# def readFileData(filePath):
#     # Reading the file
#     file = open(answer_path, "rb")
#     pdf = PdfFileReader(file)
#     # Getting the number of pages
#     numPages = pdf.getNumPages()
#     # Getting the text from the first page
#     text = pdf.getPage(0).extractText()
#     # Getting the image from the first page
#     img = pdf.getPage(0).mediaBox
#     # Getting the text from the last page
#     text = pdf.getPage(numPages-1).extractText()
#     # Getting the image from the last page
#     img = pdf.getPage(numPages-1).mediaBox
#     # Closing the file
#     file.close()
#     # Setting the data
#     # print(img)
#     # print(text)
#     f = open("/home/daniel/src/ibdb/Server/DataPros/Physics/test.txt", 'w')
#     f.write(text)
#     f.close()
#     # data["img"] = img
#     # data["text"] = text
#
#
# readFileData(questions_path)
# # This is output for answer_path
# '''
# RectangleObject([0, 0, 595.22, 842])
#  Œ 2 Œ M16/4/PHYSI/HPM/ENG/TZ0/XX/M
#     1.   B   16.   C   31.   C   46.   Œ
#
#  2.   A   17.   A   32.   A   47.   Œ
#   3.   D   18.   D   33.   D   48.   Œ
#   4.   A   19.   B   34.   C   49.   Œ
#
#  5.   D   20.   D   35.   B   50.   Œ
#
#  6.   C   21.   A   36.   D   51.   Œ
#
#  7.   B   22.   C   37.   B   52.   Œ
#
#  8.   A   23.   B   38.   C   53.   Œ
#
#  9.   B   24.   A   39.   B   54.   Œ
#
#  10.   D   25.   D   40.   A   55.   Œ
#   11.   D   26.   B   41.   Œ   56.   Œ
#   12.   C   27.   C   42.   Œ   57.   Œ
#
#  13.   A   28.   B   43.   Œ   58.   Œ
#   14.   D   29.   A   44.   Œ   59.   Œ
#   15.   C   30.   C   45.   Œ   60.   Œ
#   '''
# # File ouput for questions in in test.txt little messy will clean up tmr
