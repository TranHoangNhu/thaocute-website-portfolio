import pdfplumber

pdf_path = "d:/NHƯ THẢO (ZK)/nhuthao-website-portfolio/Tran-Thi-Nhu-Thao-TopCV.pdf"
with pdfplumber.open(pdf_path) as pdf:
    for page in pdf.pages:
        print(page.extract_text())
