import os
import sys
import re
import time
import json as js
from enum import Enum

import argparse
import numpy as np
from PIL import Image

import fitz

from logger import Logger
from logger import Color

class ArgNotADirectoryError(Exception):
    pass
class ArgNotAFileError(Exception):
    pass
class ArgNotLogValueError(Exception):
    pass

class EndType(Enum):
    DEFAULT = 'default'
    A_BOX = 'a_box'
    NEXT_Q = 'next_q'

class Subject(Enum):
    NONE = 'none'
    MATH = 'math'
    MATH_AA = 'math_aa'
    MATH_AI = 'math_ai'
    PHYS = 'phys'

class Level(Enum):
    NONE = 'none'
    HL = 'hl'
    SL = 'sl'

def main():
    try:
        parser = argparse.ArgumentParser(description='Batch parse IBDP past papers for individual questions and question tags.')
        parser.add_argument('-d', dest='dir', type=checkArgPathValue, help='the directory that contains the pdf files to search (automatically the working directory)')
        parser.add_argument('-c', dest='classf', type=checkArgFileValue, help='the file that contains the classification data (automatically searches for classification.json in the working directory)')
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

        classificationJson = None
        if not args.classf:
            args.classf = 'classification.json'
        with open(args.classf) as file:
            classificationJson = js.load(file)

        if not os.path.isdir(f'{directory}out/'):
            os.mkdir(f'{directory}out/')
        for fileName in os.listdir(args.dir):
            if getFileExtension(fileName) == 'pdf':
                Logger.log(2, '')
                Logger.log(2, '-' * len(fileName))
                Logger.log(1, f'Reading {fileName}...', color=Color.BOLD)
                document = readDocument(f'{directory}{fileName}')
                if not os.path.isdir(f'{directory}out/{fileName[:-4]}/'):
                    os.mkdir(f'{directory}out/{fileName[:-4]}/')
                textData = extractQuestions(f'{directory}{fileName}', f'{directory}out/{fileName[:-4]}/', document)
                classify(classificationJson, textData)

    except ArgNotADirectoryError:
        Logger.log(0, '[ERROR] No such directory: enter a valid directory to scan', Color.FAIL)
    except ArgNotLogValueError:
        Logger.log(0, '[ERROR] Expected integer value between 0 and 2 inclusive', Color.FAIL)

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
    topMargin = -10
    bottomMargin = 12
    leftMargin = 30
    rightMargin = 30

    zoom = dpi / 72
    magnify = fitz.Matrix(zoom, zoom)
    doc = fitz.open(inPath)
    isFindingStart = True
    questionNumber = 0
    previousNumber = 0
    previousRect = None
    previousPageNumber = 0
    previousPage = None
    endType = EndType.DEFAULT;
    textElements = []

    textData = {}
    # for each page in the doc
    for i, page in enumerate(doc):
        pageData = document[i]['pageData']

        Logger.log(2, f"Page {i+1}/{doc.page_count}", Color.OKCYAN)
        
        if i+1 == doc.page_count:
            ending = (page.rect.x1, page.rect.y1, page.rect.x1, page.rect.y1, "")
            pageData.append(ending)
        
        # for each dataBox in the page
        for k, dataBox in enumerate(pageData):
            text = dataBox[4]
            textRect = fitz.Rect(dataBox[0], dataBox[1], dataBox[2], dataBox[3])

            if not isFindingStart:
                # deciding the ending method
                match = re.search('(\d+)\.\s*\\n', text)
                if match and endType == endType.DEFAULT:
                    if not match: continue
                    questionNumber = match.group(1)
                    if not questionNumber.strip().isdigit(): continue
                    questionNumber = int(questionNumber)
                    if not (questionNumber == previousNumber + 1): continue
                    endType = EndType.NEXT_Q

                # TODO: Change this to a more specific specification. Draw up a tree for conditions of question types.
                match = re.search('(?:\(a\))', text)
                if match and endType == EndType.DEFAULT:
                    endType = EndType.NEXT_Q

                match = re.search('(?:\. ){2,}', text)
                if match and endType == EndType.DEFAULT:
                    endType = EndType.A_BOX

                textElements.append(text)

                # check question type and see if EOQ
                if endType == EndType.NEXT_Q:
                    match = re.search('(\d+)\.\s*\\n', text)
                    if not match: continue
                    questionNumber = match.group(1)
                    if not questionNumber.strip().isdigit(): continue
                    questionNumber = int(questionNumber)
                    if not (questionNumber == previousNumber + 1): continue

                    img = None
                    if i == previousPageNumber:
                        # case 1: both on the same page
                        pix = page.get_pixmap(matrix=magnify, clip=fitz.Rect(fitz.Point(leftMargin, previousRect.y0 + topMargin), fitz.Point(page.rect.width - rightMargin, textRect.y0 - bottomMargin)))
                        img = Image.frombytes('RGB', [pix.width, pix.height], pix.samples)
                    else:
                        # case 2: different pages
                        pix1 = previousPage.get_pixmap(matrix=magnify, clip=fitz.Rect(fitz.Point(leftMargin, previousRect.y0 + topMargin), fitz.Point(page.rect.width - rightMargin, page.rect.y1)))
                        pix2 = page.get_pixmap(matrix=magnify, clip=fitz.Rect(fitz.Point(leftMargin, page.rect.y0), fitz.Point(page.rect.width - rightMargin, textRect.y0 - bottomMargin)))
                        img1 = Image.frombytes('RGB', [pix1.width, pix1.height], pix1.samples)
                        img2 = Image.frombytes('RGB', [pix2.width, pix2.height], pix2.samples)
                        img = Image.new('RGB', (max(img1.width, img2.width), img1.height + img2.height), (255, 255, 255))
                        img.paste(img1, (0, 0))
                        img.paste(img2, (0, img1.height))
                    isFindingStart = True

                elif endType == EndType.A_BOX:
                    match = re.search('(?:\. ){2,}', text)
                    if not match: continue

                    pix = page.get_pixmap(matrix=magnify, clip=fitz.Rect(fitz.Point(leftMargin, previousRect.y0 + topMargin), fitz.Point(page.rect.width - rightMargin, textRect.y0 - bottomMargin)))
                    img = Image.frombytes('RGB', [pix.width, pix.height], pix.samples)
                    isFindingStart = True

                # found the end this time
                if isFindingStart:
                    textData[f'{outPath}page{i}object{k}.png'] = textElements[:]
                    img.save(f'{outPath}page{i}object{k}.png')
                    pageData[-1] = (page.rect.x1, page.rect.y1, page.rect.x1, page.rect.y1, f"{questionNumber + 1}")

            # now finding start
            if isFindingStart:
                endType = EndType.DEFAULT
                match = re.search('(\d+)\.\s*\\n', text)
                if match:
                    questionNumber = match.group(1)
                    if not questionNumber.strip().isdigit(): continue
                    questionNumber = int(questionNumber)
                    if not (questionNumber == previousNumber + 1): continue

                    # found the start
                    previousNumber = questionNumber
                    previousRect = textRect
                    previousPageNumber = i
                    previousPage = page
                    isFindingStart = False
                    textElements.clear()
    return textData

def classify(json, textData):
    for file, data in textData.items():
        origin = file.split('/')[-2]
        subject = Subject.NONE
        level = Level.NONE
        if 'math' in origin.lower():
            subject = Subject.MATH
            if 'hl' in origin.lower():
                level = Level.HL
            elif 'sl' in origin.lower():
                level = Level.SL

        subsectionWeights = {}
        subsubsectionWeights = {}
        if (subject == Subject.NONE):
            continue
        for text in data:
            for subsection, subsubsections in json[subject.value].items():
                for subsubsection, subsubsections in subsubsections.items():
                    for word, weight in subsubsections.items():
                        if word in text:
                            if subsection in subsectionWeights:
                                subsectionWeights[subsection] += 1
                            else:
                                subsectionWeights[subsection] = 1
                            if subsubsection in subsubsectionWeights:
                                subsubsectionWeights[subsubsection] += 1
                            else:
                                subsubsectionWeights[subsubsection] = 1
        print(file)
        print(subsectionWeights)
        print(subsubsectionWeights)

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

def checkArgFileValue(file):
    if os.path.isfile(file):
        return file
    else:
        raise ArgNotAFileError

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
