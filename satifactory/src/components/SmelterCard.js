import React, { useState } from 'react';
import '../css/smelters.css';

    function NodeCard (props) {
    const [smelters, setSmelters] = useState(props.amount)
    
    const inputCalc = () => {
        return (
            <div>
               {smelters * 30}
            </div>
        )
    }

    const outputCalc = () => {
        return (
            <div>
               {smelters * 30}
            </div>
        )
    }

    const changeSmelter = (value) => {
        setSmelters(smelters + value)
    }

    return (
        <div className='smelterCard'>
            <h2>Recipe: {props.type} Ingot</h2>
            <div className ='amountRow'>
                <h3>Amounts:</h3>
                <p>{smelters}</p> 
                <button onClick={() => changeSmelter(1)}> + </button> 
                <button onClick={() => changeSmelter(-1)}> - </button>
            </div>
            
            <div className='inputOutputRow'>
                <h4>Input: </h4>
                <h5>{inputCalc()}</h5>
                <p>{props.input}</p>
                <p>per minute</p>
            </div>
            <div className='inputOutputRow'>
                <h4>Output: </h4>
                <h5>{outputCalc()}</h5>
                <p>{props.output}</p>
                <p>per minute</p>
            </div>
        </div>
    )
}

export default NodeCard;