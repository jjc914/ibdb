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

class ArgNotAFileError(Exception):
    pass
class ArgNotLogValueError(Exception):
    pass

class EndType(Enum):
    DEFAULT = 'default'
    A_BOX = 'a_box'
    NEXT_Q = 'next_q'

def main():
    parser = argparse.ArgumentParser(description='Single parse IBDP past papers for multiple choice questions and answers.')
    parser.add_argument('-q', dest='qPath', type=checkArgFileValue, help='fuck off')
    parser.add_argument('-a', dest='aPath', type=checkArgFileValue, help='what did i tell u')
    args = parser.parse_args()

    if not args.qPath or not args.aPath:
        print("FAIL")
        return
    
    doc = fitz.open(args.aPath)
    data = doc.get_page_text(1)
    match = re.findall('(\d+)\.\s\\n\s*(\D)', data)
    ms = dict(match)

    dir = '/'.join(f'{args.qPath}'.split('/')[0:-2])
    if not os.path.isdir(f'{dir}/out/'):
        os.mkdir(f'{dir}/out/')
    extractQuestions(f'{args.qPath}', f'{dir}/out/', ms, readDocument(f'{args.qPath}'))

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

def extractMarkscheme():
    pass

def extractQuestions(inPath, outPath, ms, document):
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
                    img.save(f'{outPath}page{i}object{k}answer{ms[str(questionNumber)]}.png')
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

def checkArgFileValue(file):
    if os.path.isfile(file):
        return file
    else:
        raise ArgNotAFileError

if __name__ == "__main__":
    main()