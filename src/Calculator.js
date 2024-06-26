// src/Calculator.js
import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                setResult(eval(input));
            } catch {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <Display input={input} result={result} />
            <div className="buttons">
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((btn, idx) => (
                    <Button key={idx} value={btn} onClick={() => handleButtonClick(btn)} />
                ))}
            </div>
        </div>
    );
};

export default Calculator;
