import React, { useState } from 'react';
import data from './data';
import './App.css';

function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(id) {
        if (enableMultiSelection) {
            setSelected(null);
        } else {
            setSelected(id === selected ? null : id);
        }
    }

    function handleMultiSelection(id) {
        const copyMultiple = [...multiple];
        const finIndexOfCurrentId = copyMultiple.indexOf(id);
        if (finIndexOfCurrentId === -1) {
            copyMultiple.push(id);
        } else {
            copyMultiple.splice(finIndexOfCurrentId, 1);
        }
        setMultiple(copyMultiple);
    }

    console.log(selected, multiple);

    return (
        <div className='wrapper'>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
                {enableMultiSelection ? 'Disable multi selection' : 'Enable multi selection'}
            </button>
            <div className='accordian'>
                {data.map((dataItem) => (
                    <div className='item' key={dataItem.id}>
                        <div className='title' onClick={() => (enableMultiSelection ? handleMultiSelection(dataItem.id) : handleSingleSelection(dataItem.id))}>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {(enableMultiSelection ? multiple.includes(dataItem.id) : selected === dataItem.id) && (
                            <div className='content'>{dataItem.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accordian;
