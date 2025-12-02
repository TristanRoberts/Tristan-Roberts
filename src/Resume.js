import { useState } from 'react';
import React from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/Page/TextLayer.css"; 

//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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
   return (
    <div>
        <Document file="./assets/Tristan_V_Roberts_Resume.pdf">
            <Page></Page>
        </Document>
    </div>
   );
}

export default Resume; 