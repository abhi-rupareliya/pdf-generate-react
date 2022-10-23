import './App.css';
import React from 'react';
import { useState } from 'react';
import GenPage from './GenPage';
import { genPDF } from './GenPage';

const Page = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [edu, setEdu] = useState("");
    const [oth, setOth] = useState("")

    return (
        <>
            <div className='main-body'>
                <input type='text' placeholder='Enter your name' onChange={(e) => {
                    e.preventDefault();
                    setName(e.target.value);
                }} />
                <br /><br />

                <input type='text' placeholder='Enter your native place' onChange={(e) => {
                    e.preventDefault();
                    setCity(e.target.value);
                }} /><br /><br />

                <input type='text' placeholder='Enter about your education' onChange={(e) => {
                    e.preventDefault();
                    setEdu(e.target.value);
                }} />
                <br /><br />

                <textarea className="tarea" placeholder='Enter some text about you' onChange={(e) => {
                    e.preventDefault();
                    setOth(e.target.value);
                }} />
                <br /><br />

                <button className='generate-btn' onClick={(e) => {
                    e.preventDefault();
                    if (name === "") {
                        alert("Enter name to generate");
                    }
                    else {
                        genPDF(name);
                    }
                }}>Generate PDF</button>
            </div>
            <GenPage name={name} city={city} edu={edu} oth={oth} />
        </>
    );
}
export default Page;