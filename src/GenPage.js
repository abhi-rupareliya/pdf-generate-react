import React from 'react';
import jsPDF from 'jspdf';

const GenPage= (props) => {
    return (
        <div className='bdy' id='content'>
            <div className='heading'>
                <p>{props.name}</p>
                <br />
                <p >{props.city}</p>
                <br />
                <p >{props.edu}</p>
                <br />
            </div>

            <div className='contentss'>
                <p>{props.oth}</p>
            </div>
        </div>
    )
}
const genPDF = (props) => {
    console.warn(props);
    var doc = new jsPDF('p', 'pt', 'a4');
    doc.html(document.querySelector("#content"), {
        callback: function (pdf) {
            var pgCount = doc.internal.getNumberOfPages();
            pdf.deletePage(pgCount);
            pdf.save(props+".pdf");
        }
    })
}
export default GenPage;
export {genPDF};