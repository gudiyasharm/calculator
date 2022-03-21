import React, { useState } from 'react'
import Buttons from './Buttons';
import Screen from './Screen';
import * as math from 'mathjs'
import './Main.css'


function Main() {
    const [text, setText] = useState('')
    const [result, setResult] = useState('')
    const [history, setHistory] = useState('__')
    const [displayHistory, setDisplayHistory] = useState(false)
    const [disable, setDisable] = useState(true)

    const addText = (val) => {
        setText((text) => [...text, val + ''])
    }


    const calculateResult = () => {
        const input = text.join("");
        setResult(math.evaluate(input));
        const save = math.evaluate(input);
        const all = `${input} = ${save}`
        localStorage.setItem('saved', all);
        // console.log('Iput iss   ',input);
    };

    const backSpace = () => {
        setText(text.slice(0, text.length - 1))
    }

    const clearText = () => {
        setText("");
        setResult("")
    }

    const submitHistory = () => {
        var getHistory = localStorage.getItem('saved')
        setHistory(getHistory);
        // console.log(getHistory);
        setDisplayHistory(true)
    }

    const clearHistory = () => {
        // localStorage.clear()
        setHistory(null)
        setDisable(true)

    }

    const backToCal = () => {
        setDisplayHistory(false)
    }

    return (
        <div className='mainCal' >
            {displayHistory === false ?
                <div className='calc' >

                    <Screen text={text} result={result} />

                    <div className='row'>
                        <Buttons label='Clear' color='#e60000' handleClick={clearText} />
                        <Buttons label='H' handleClick={submitHistory} color='#e60000' />
                        <Buttons label='C' handleClick={backSpace} color='#e60000' />
                        <Buttons name='/' label='/' handleClick={addText} color='#e60000' />
                    </div>

                    <div className="row">
                        <Buttons name='7' label='7' handleClick={addText} />
                        <Buttons name='8' label='8' handleClick={addText} />
                        <Buttons name='9' label='9' handleClick={addText} />
                        <Buttons name='*' label='*' handleClick={addText} color='#e60000' />
                    </div>
                    <div className="row">
                        <Buttons name='4' label='4' handleClick={addText} />
                        <Buttons name='5' label='5' handleClick={addText} />
                        <Buttons name='6' label='6' handleClick={addText} />
                        <Buttons name='-' label='-' handleClick={addText} color='#e60000' />
                    </div>
                    <div className="row">
                        <Buttons name='1' label='1' handleClick={addText} />
                        <Buttons name='2' label='2' handleClick={addText} />
                        <Buttons name='3' label='3' handleClick={addText} />
                        <Buttons name='+' label='+' handleClick={addText} color='#e60000' />
                    </div>
                    <div className="row">
                        <Buttons name='0' label='0' handleClick={addText} />
                        <Buttons name='.' label='.' handleClick={addText} color='#e60000' />
                        <Buttons label='=' handleClick={calculateResult} color='#e60000' />
                        <Buttons name='%' label='%' handleClick={addText} color='#e60000' />
                    </div>
                </div> :
                <div>
                    <h1>History:- {history}</h1>
                    <div className='btn'>
                        <div className='buttons'>
                            <button onClick={backToCal} >Back</button>
                        </div>

                        <div className='buttons'>
                            <button onClick={clearHistory} disabled={!history}>Clear History</button>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default Main;