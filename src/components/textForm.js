import React, { useState } from 'react';


export default function TextForm(props) {
    const [words, setWords] = useState(0);
    const [chars, setChars] = useState(0);
    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        const newText = event.target.value;
        setText(newText);

        // Count non-empty words
        const newWordCount = newText.trim().split(/\s+/).filter(word => word !== '').length;

        // Count characters excluding spaces
        const newCharCount = newText.replace(/\s/g, '').length;

        setWords(newWordCount);
        setChars(newCharCount);
    };

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const clearText = () => {
        let newText = '';
        setText(newText);
    };

    const removeSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    };

    const copyText = () => {
        let textArea = document.getElementById('Textarea');
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
        props.showalert("The text is copied to ClipBoard","success");
    };

    const handleUpClickFirstWord = () => {
        let words = text.split(/\s+/);

        let capitalizedWords = words.map(word => {
            if (word.length > 0) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            } else {
                return word;
            }
        });

        let newText = capitalizedWords.join(' ');
        setText(newText);
    };

    const handleUpClickFirstWordLine = () => {
        let sentences = text.split(/([.?!]\s*)/);

        for (let i = 0; i < sentences.length; i++) {
            if (sentences[i] !== undefined && sentences[i] !== null && sentences[i] !== "") {
                sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
            }
        }

        let newText = sentences.join('');
        setText(newText);
    };

    return (
        <div>
            <div className="container" style={{
                color: props.mode === 'light' ? 'black' : 'white',
            }}>
                <h1 className="my-4">{props.text}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            color: props.mode === 'dark' ? 'white' : 'black',
                            backgroundColor: props.mode === 'dark' ? 'gray' : 'white',
                            caretColor: props.mode === 'dark' ? 'white' : 'black',
                            cursor: 'pointer',
                        }}
                        id="Textarea"
                        rows="8"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
                    Convert to UpperCase
                </button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClickFirstWord}>
                    Capitalize Each First Word
                </button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClickFirstWordLine}>
                    Capitalize First Word of New Line
                </button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
                    Convert to LowerCase
                </button>
                <button className="btn btn-primary mx-1 my-1" onClick={removeSpaces}>
                    Remove Extra Spaces
                </button>
                <button className="btn btn-primary mx-1 my-1" onClick={copyText}>
                    Copy Text
                </button>
                <button className="btn btn-primary mx-1 my-1" onClick={clearText}>
                    Clear Text
                </button>
                <h2 className="my-2">Your text summary</h2>
                <p style={{
                    color: props.mode === 'light' ? 'black' : 'red',
                }}>
                    {text.trim().length === 0 ? '0 words and 0 characters' : `${words} words and ${chars} characters`}
                </p>

                <h2 className="my-1">Preview</h2>
                <p>{text === "" ? "Enter some content and it will show here" : text}</p>
            </div>
        </div>
    );
}

