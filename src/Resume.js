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
        <div className="Resume-header">
            <a href="/Tristan_V_Roberts_Resume.pdf" download="Tristan_V_Roberts_Resume.pdf">
                <button>Download Resume</button>
            </a>
        </div>
        <Document file={pdfResume} onLoadSuccess={onDocumentLoadSuccess}>
            <Page className="react-pdf__Page" pageNumber={pageNumber}/> 
        </Document>
        <p>
            Page {pageNumber} of {numPages}
        </p>
    </div>
   );
}

export default Resume; 


/*
In JSX, the style prop is used for inline styling, but its value must be a JavaScript object, not a string as in plain HTML. This object uses camelCase property names for CSS properties (e.g., backgroundColor instead of background-color). 
Key Concepts
Double Curly Braces: The syntax requires double curly braces: the outer set encloses the JavaScript expression (the style object), and the inner set defines the object literal itself, e.g., <h1 style={{ color: "red", fontSize: "16px" }}>Hello World!</h1>.
CamelCase Properties: Since the styles are written as JavaScript objects, properties like background-color must be written as backgroundColor.
Values: Values are typically strings, but some numeric values (like padding or lineHeight) automatically get a px suffix appended by React unless you specify a different unit.
Dynamic Styles: You can store the style object in a separate variable or use props and state to create dynamic styles. 







*/