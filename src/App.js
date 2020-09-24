import React, {useRef, useState} from 'react';
import { Button, Form} from 'react-bootstrap';
import './App.css';
import * as axios from "axios";
import {adviceUrl} from "./_constants";

function App() {
    const [advice, setAdvice] = useState();
    const [copied, setCopied] = useState();
    const textAreaRef = useRef(null);


    const getAdvice = () => {
        return axios
            .get(adviceUrl)
            .then((response) => {
                console.log(response.data.slip.advice)
                setAdvice(response.data.slip.advice);
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .catch((error) => {
                console.log(error)
                setAdvice(error.message);
                throw error;
            });
    };

    const copyToClipboard = (e) => {
        console.log(textAreaRef)
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopied('copied!');
    };

    return (
    <div className="App">
<div className="assign">
    <div className="text-show">
        <textarea ref= {textAreaRef} value={advice}></textarea>
        <div>
            <p>{copied}</p>
        </div>
    </div>
    <div className="reload">
        <button onClick={getAdvice}>Reload</button>
    </div>
    <div className="copy-tweet">
        <button  onClick={copyToClipboard}>Copy Text</button>
        <button  onClick={copyToClipboard}>Tweet</button>
    </div>
</div>
    </div>
  );
}

export default App;
