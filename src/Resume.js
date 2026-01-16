import { useState } from 'react';
import React from "react";
import { Document, Page, pdfjs } from 'react-pdf';
//import { getFilePlugin } from '@react-pdf-viewer/get-file';
//anchor tag
import "react-pdf/dist/Page/TextLayer.css"; 
import pdfResume from "./assets/Tristan_V_Roberts_Resume.pdf"; //this is necessary we cant have direct file path

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
   const [numPages, setNumPages] = useState();
   const [pageNumber, setPageNumber] = useState(1); 

   const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages); 
   }


   return (
    <div>
        <Document file={pdfResume} onLoadSuccess={onDocumentLoadSuccess}>
            {/* <DownloadButton /> */}
            <Page pageNumber={pageNumber}/>
        </Document>
        <p>
            Page {pageNumber} of {numPages}
        </p>
    </div>
   );
}

export default Resume; 