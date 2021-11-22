import React, {useState} from "react";

import useThemeContext from '@theme/hooks/useThemeContext';

let AceEditor = null;
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
    AceEditor = require('react-ace').default;
    require("ace-builds/src-noconflict/mode-python");
    require("ace-builds/src-noconflict/theme-textmate");
    require("ace-builds/src-noconflict/theme-dracula");
}

import {BsPlayFill} from "react-icons/bs";
import {BiReset} from "react-icons/bi";
import axios from "axios";

function buttonBar(onRunClick, onResetClick, title) {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 2px 0 2px', alignItems: 'center'}}>
            <BsPlayFill size={'32px'} onClick={onRunClick}/>
            <strong>{title}</strong>
            <BiReset size={'32px'} onClick={onResetClick}/>
        </div>
    )
}

function resultWindow(result, isDarkTheme) {
    return (
        <div style={{display: "flex", flexDirection: 'column'}}>
            Output:
            <pre style={{
                margin: '0px',
                backgroundColor: isDarkTheme ? "#282a36" : "#FFFFFF"
            }}>
                    {result.stdout}
                <span style={{color: 'red'}}>{result.stderr}</span>
                </pre>
        </div>
    )
}

export const CodeBlock = (props) => {
    const [code, setCode] = useState(props.code.trim());
    const [codeChanged, setCodeChanged] = useState(true);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState({stdout: '', stderr: ''});

    const {isDarkTheme} = useThemeContext();

    function codeChange(newValue) {
        if (newValue !== code) {
            setCode(newValue)
            setCodeChanged(true)
        }
    }

    function runCode() {
        // const url = "https://api.latenights.me/runCode"
        const url = "https://w0oprcety1.execute-api.ap-southeast-2.amazonaws.com/default/runNoCORS"
        let preamble = props.preamble == null ? '' : props.preamble
        if (codeChanged) {
            setResult({stdout: 'Loading...', stderr: ''})
            axios.post(
                url,
                JSON.stringify({'preamble': preamble, 'code': code}),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )
                .then(response => setResult(response.data))
                .catch(() => setResult({
                    stdout: "",
                    stderr: "Oops! looks like something went wrong.\nMake sure your code isn't running for too long."
                }))
            setShowResult(true)
            setCodeChanged(false)
        }
    }

    function resetWindow() {
        setCode(props.code.trim());
        setCodeChanged(true)
        setShowResult(false)
    }

    return <div>
        {AceEditor && <div style={{
            borderRadius: '0.4em',
            background: 'var(--block-background)',
            padding: '5px',
            margin: 'auto',
            marginBottom: '1em',
        }}>
            <AceEditor
                value={code}
                mode="python"
                theme={isDarkTheme ? "dracula" : "textmate"}
                onChange={newValue => codeChange(newValue)}
                onLoad={editor => {
                    editor.renderer.setScrollMargin(10, 10, 0, 0);
                    editor.moveCursorTo(0, 0);
                }}
                name="CodeBlock"
                fontSize={14}
                editorProps={{$blockScrolling: true}}
                width='100%'
                maxLines={Infinity}
                style={{borderRadius: '0.4em'}}
            />
            {buttonBar(runCode, resetWindow, props.title)}
            {showResult ? resultWindow(result, isDarkTheme) : null}
        </div>}
    </div>
}