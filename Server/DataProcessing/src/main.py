import os;
import sys;
import re;
import io;
import time;

import argparse

from pdfminer.layout import LAParams, LTTextBox
from pdfminer.pdfpage import PDFPage
from pdfminer.pdfinterp import PDFResourceManager
from pdfminer.pdfinterp import PDFPageInterpreter
from pdfminer.converter import PDFPageAggregator

from logger import Logger

# this was such a pain to finally figure out, i recommend never touching the structure of PDF files with a 10 foot pole
def readDocument(path):
    file = open(path, 'rb')

    objs = []
    rsrcmgr = PDFResourceManager()
    laparams = LAParams()
    device = PDFPageAggregator(rsrcmgr, laparams=laparams)
    interpreter = PDFPageInterpreter(rsrcmgr, device)
    pages = PDFPage.get_pages(file)
    for i, page in enumerate(pages):
        Logger.log(2, 'Parsing page {}...'.format(i + 1))
        interpreter.process_page(page)
        layout = device.get_result()
        for obj in layout:
            if isinstance(obj, LTTextBox):
                x, y, text = obj.bbox[0], obj.bbox[3], obj.get_text()
                objs.append((i, (x, y), text))
    file.close()
    return sorted(objs, key=lambda e: (e[0], -e[1][1]))

def getFileExtension(fileName):
    return file.split('.')[len(file.split('.')) - 1]

def checkArgLogValue(value):
    if value in ['0', '1', '2']:
        return int(value)
    else:
        raise Exception('[Err] Expected integer value between 0 and 3')

def checkArgPathValue(path):
    if os.path.isdir(path):
        return path
    else:
        raise NotADirectoryError('[Errno 2] No such directory: \'%s\'' % path)

if __name__ == '__main__':
    startTime = round(time.time() * 1000)

    parser = argparse.ArgumentParser(description='Parse IBDP past papers for individual questions and question tags.')
    parser.add_argument('-d', dest='dir', type=checkArgPathValue, help='the directory that contains the pdf files to search (automatically the working directory)')
    parser.add_argument('-log', dest='log', type=checkArgLogValue, help='sets progress logging detail (only important 0-1-2 everything)')
    args = parser.parse_args()

    Logger.setPriority(args.log)

    directory = ''
    if args.dir:
        if args.dir[len(args.dir) - 1] != '/':
            args.dir += '/'
        directory = args.dir
    for file in os.listdir(args.dir):
        if getFileExtension(file) == 'pdf':
            Logger.log(1, '')
            Logger.log(1, '-' * len(file))
            Logger.log(1, 'Reading {}...'.format(file))
            document = readDocument(directory + file)

    Logger.log(0, '')
    Logger.log(0, 'Process finished in {}ms'.format(round(time.time() * 1000) - startTime))

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
