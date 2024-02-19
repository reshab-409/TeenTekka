import React from 'react';
import './DownloadPDF.css';

const PdfDownload = () => {
    const onButtonClick = () => {
        const pdfUrl = process.env.PUBLIC_URL + "/Catalouge_2.pdf"; // Adjust the path accordingly
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Catalouge_2.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className='download'>
                <h1 className='h1'>Want to know more about us?</h1>
                <p className='p'>Click on below button to download PDF file</p>
                <button className='btn' onClick={onButtonClick}>Download PDF</button>
            </div>
        </>
    );
};

export default PdfDownload;
