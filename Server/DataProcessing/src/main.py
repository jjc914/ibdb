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

from PyPDF2 import PdfFileReader
from PyPDF2 import PdfFileWriter
from PyPDF2 import PdfFileMerger

from logger import Logger
from logger import Color

class ArgNotADirectoryError(Exception):
    pass
class ArgNotLogValueError(Exception):
    pass

def main():
    startTime = round(time.perf_counter() * 1000)
    try:
        parser = argparse.ArgumentParser(description='Parse IBDP past papers for individual questions and question tags.')
        parser.add_argument('-d', dest='dir', type=checkArgPathValue, help='the directory that contains the pdf files to search (automatically the working directory)')
        parser.add_argument('-log', dest='log', type=checkArgLogValue, help='sets progress logging detail (only important 0-1-2 everything)')
        args = parser.parse_args()

        if args.log:
            Logger.setPriority(args.log)
        else:
            Logger.setPriority(0)

        Logger.log(0, 'Starting...', Color.OKGREEN)

        directory = ''
        if args.dir:
            if args.dir[len(args.dir) - 1] != '/':
                args.dir += '/'
            directory = args.dir
        for file in os.listdir(args.dir):
            if getFileExtension(file) == 'pdf':
                Logger.log(2, '')
                Logger.log(2, '-' * len(file))
                Logger.log(1, f'Reading {file}...', color=Color.BOLD)
                document = readDocument(directory + file)
                extractQuestions(document)
    except ArgNotADirectoryError:
        Logger.log(0, '[ERROR] No such directory: enter a valid directory to scan', Color.FAIL)
    except ArgNotLogValueError:
        Logger.log(0, '[ERROR] Expected integer value between 0 and 2 inclusive', Color.FAIL)

    Logger.log(0, '')
    Logger.log(0, f'Process finished in {round(time.perf_counter() * 1000) - startTime}ms', Color.OKGREEN)

# this was such a pain to finally figure out, i recommend never touching the structure of PDF files with a 10 foot pole
# TODO: https://blog.didierstevens.com/programs/pdf-tools/ could probably get more information using custom pdf parser
# TODO: parse questions and markscheme differently
def readDocument(path):
    with open(path, 'rb') as file:
        objs = []
        rsrcmgr = PDFResourceManager()
        laparams = LAParams()
        device = PDFPageAggregator(rsrcmgr, laparams=laparams)
        interpreter = PDFPageInterpreter(rsrcmgr, device)
        pages = PDFPage.get_pages(file)
        for i, page in enumerate(pages):
            Logger.log(2, f'Parsing page {i + 1}...')
            interpreter.process_page(page)
            layout = device.get_result()
            for obj in layout:
                if isinstance(obj, LTTextBox):
                    x, y, text = obj.bbox[0], obj.bbox[3], obj.get_text()
                    objs.append((i, (x, y), text))
    return sorted(objs, key=lambda e: (e[0], -e[1][1]))

def extractQuestions(document):
    for object in document:
        page, coords, text = object
        print(page, coords, text)

def getFileExtension(fileName):
    return file.split('.')[len(file.split('.')) - 1]

def checkArgPathValue(path):
    if os.path.isdir(path):
        return path
    else:
        raise ArgNotADirectoryError

def checkArgLogValue(value):
    if value in ['0', '1', '2']:
        return int(value)
    else:
        raise ArgNotLogValueError

if __name__ == '__main__':
    main()

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
"""
Mathematics AA HL
|-Numbers & Algebra
| |-Sequences & Series
| |-Exponents & Logs
| |-Binomial Theorem
| |-Counting Principles
| |-Complex Numbers
| |-Proofs
| |-Systems of Equations
|-Functions
| |-Properties of Functions
| |-Quadratics
| |-Rational Functions
| |-Exponent-Log Functions
| |-Transformations
| |-Polynomials
| |-Modulus & Inequalities
|-Geometry & Trigonometry
| |-Geometry & Shapes
| |-Trigonometric Functions
| |-Vectors
|-Statistics & Probability
| |-Statistics
| |-Bivariate Statistics
| |-Probability
| |-Distributions
|-Calculus
| |-Differential Calculus
| |-Integral Calculus
| |-Kinematics
| |-Differential Equations
| |-Maclaurin Series
"""
