import os
import sys
import re
import time

import argparse
from PIL import Image

import fitz

from logger import Logger
from logger import Color

class ArgNotADirectoryError(Exception):
    pass
class ArgNotLogValueError(Exception):
    pass

def main():
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
        for fileName in os.listdir(args.dir):
            if getFileExtension(fileName) == 'pdf':
                Logger.log(2, '')
                Logger.log(2, '-' * len(fileName))
                Logger.log(1, f'Reading {fileName}...', color=Color.BOLD)
                document = readDocument(directory + fileName)
                if not os.path.isdir(f'{directory}out/{fileName[:len(fileName) - 4]}/'):
                    os.mkdir(f'{directory}out/{fileName[:len(fileName) - 4]}/')
                extractQuestions(directory + fileName, f'{directory}out/{fileName[:len(fileName) - 4]}/', document)
    except ArgNotADirectoryError:
        Logger.log(0, '[ERROR] No such directory: enter a valid directory to scan', Color.FAIL)
    except ArgNotLogValueError:
        Logger.log(0, '[ERROR] Expected integer value between 0 and 2 inclusive', Color.FAIL)

# this was such a pain to finally figure out, i recommend never touching the structure of PDF files with a 10 foot pole
# TODO: https://blog.didierstevens.com/programs/pdf-tools/ could probably get more information using custom pdf parser
# TODO: parse questions and markscheme differently
def readDocument(path):
    doc = fitz.open(path)
    docData = []
    for i, page in enumerate(doc):
        textPage = page.get_textpage();
        pageData = {
            'pageNumber': i,
            'pageSize': page.rect,
            'pageData': textPage.extractBLOCKS()
        }
        docData.append(pageData)
    return docData

def extractQuestions(inPath, outPath, document):
    dpi = 300

    zoom = dpi / 72
    magnify = fitz.Matrix(zoom, zoom)
    doc = fitz.open(inPath)
    previousNumber = 0
    previousRect = None
    previousPageNumber = 0
    previousPage = None
    for i, page in enumerate(doc):
        pageData = document[i]['pageData']
        for k, dataBox in enumerate(pageData):
            text = dataBox[4]
            textRect = fitz.Rect(dataBox[0], dataBox[1], dataBox[2], dataBox[3])
            # https://regexr.com/6febi
            match = re.search('(\d+)\.\s*\\n', text)
            if not match: continue
            questionNumber = match.group(1)
            if not questionNumber.strip().isdigit(): continue
            questionNumber = int(questionNumber)
            if not (questionNumber == previousNumber + 1): continue
            # this is only ran if it is an increased digit
            if previousRect:
                if i == previousPageNumber:
                    # case 1: both on the same page
                    # pix = page.get_pixmap(matrix=magnify, clip=fitz.Rect(previousRect.top_left, textRect.top_right))
                    pix = page.get_pixmap(matrix=magnify, clip=fitz.Rect(fitz.Point(0, previousRect.y0), fitz.Point(page.rect.width, textRect.y0)))
                    img = Image.frombytes('RGB', [pix.width, pix.height], pix.samples)
                    img.save(outPath + f'page{i}object{k}.png')
                else:
                    # case 2: different pages
                    # pix1 = previousPage.get_pixmap(matrix=magnify, clip=fitz.Rect(previousRect.top_left, fitz.Point(textRect.x1, page.rect.y1)))
                    pix1 = previousPage.get_pixmap(matrix=magnify, clip=fitz.Rect(fitz.Point(0, previousRect.y0), fitz.Point(page.rect.width, page.rect.y1)))
                    # pix2 = page.get_pixmap(matrix=magnify, clip=fitz.Rect(fitz.Point(previousRect.x0, page.rect.y0), textRect.top_right))
                    pix2 = page.get_pixmap(matrix=magnify, clip=fitz.Rect(fitz.Point(0, page.rect.y0), fitz.Point(page.rect.width, textRect.y0)))
                    img1 = Image.frombytes('RGB', [pix1.width, pix1.height], pix1.samples)
                    img2 = Image.frombytes('RGB', [pix2.width, pix2.height], pix2.samples)
                    img = Image.new('RGB', (max(img1.width, img2.width), img1.height + img2.height), (255, 255, 255))
                    img.paste(img1, (0, 0))
                    img.paste(img2, (0, img1.height))
                    img.save(outPath + f'page{i}object{k}.png')

            previousNumber = questionNumber
            previousRect = textRect
            previousPageNumber = i
            previousPage = page
            # pix = page.get_pixmap(matrix=magnify, clip=fitz.Rect(dataBox[0], dataBox[1], dataBox[2], dataBox[3]))
            # img = Image.frombytes('RGB', [pix.width, pix.height], pix.samples)
            # img.save(outPath + f'page{i}object{k}.png')

def getFileExtension(fileName):
    return fileName.split('.')[len(fileName.split('.')) - 1]

def pointsToPixels(points, dpi):
    return dpi * (points / 72)

def pixelsToPoints(pixels, dpi):
    return 72 * (points / DPI)

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
    startTime = round(time.perf_counter() * 1000)
    main()
    Logger.log(0, '')
    Logger.log(0, f'Process finished in {round(time.perf_counter() * 1000) - startTime}ms', Color.OKGREEN)

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
