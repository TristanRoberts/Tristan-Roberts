import { useState } from 'react';
import React from "react";
import { Document, Page, PDFViewer, pdfjs } from 'react-pdf';
//import { getFilePlugin } from '@react-pdf-viewer/get-file';
//anchor tag
import "react-pdf/dist/Page/TextLayer.css"; 
import pdfResume from "./assets/Tristan_V_Roberts_Resume.pdf"; //this is necessary we cant have direct file path, importing it allows react to package it, "<Document> component doesnt like direct path to pdf"


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs', 
    import.meta.url,
).toString(); 

const Resume = () => {
    /*
    const [numPages, setNumPages] = useState(null); 
    const [pageNumber, setPageNumber] = useState(1); 

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div>
            Resume Text
            <Document file="./assets/Tristan_V_Roberts_Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
    */
//    const getFilePluginInstance = getFilePlugin();
//    const { DownloadButton } = getFilePluginInstance; 

// the "<a href='...'>" is an anchor tag with a button inside it, the href is a path to the public folder, it NEEDS to be the public folder


   const [numPages, setNumPages] = useState(); 
   const [pageNumber, setPageNumber] = useState(1); 

   const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages); 
   }


   return (
    <div>
        <Document file={pdfResume} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber}/>
        </Document>
        <p>
            Page {pageNumber} of {numPages}
        </p>
        <a href="/Tristan_V_Roberts_Resume.pdf" download="Tristan_V_Roberts_Resume.pdf">
            <button>Download Resume</button>
        </a>
    </div>
   );
}

export default Resume; 