import React, { useState } from 'react';
import '../css/nodes.css';

    function NodeCard (props) {
    const [impureNodes, setImpureNodes] = useState(props.impure)
    const [normalNodes, setNormalNodes] = useState(props.normal)
    const [pureNodes, setPureNodes] = useState(props.pure)
    

    const outputCalc = () => {
        return (
            <div>
                {impureNodes * 30 + normalNodes * 60 + pureNodes * 120}
            </div>
        )
    }

    const changeNode = (name, value) => {
        if (name === 'impure') {
            setImpureNodes(impureNodes + value)
        } else if (name === 'normal') {
            setNormalNodes(normalNodes + value)
        } else {
            setPureNodes(pureNodes + value)
        }
    }
    return (
        <div className='nodeCard'>
            <h2>Type: {props.type}</h2>
            <h3>Amounts:</h3>
            <div className='amountRow'>
                <h4>Impure: </h4> <p>{impureNodes}</p> <button onClick={() => changeNode('impure', 1)}> + </button> <button onClick={() => changeNode('impure', -1)}> - </button>
            </div>
           
            <div className='amountRow'>
                <h4>Normal: </h4> <p>{normalNodes}</p> <button onClick={() => changeNode('normal', 1)}> + </button> <button onClick={() => changeNode('normal', -1)}> - </button>   
            </div>
            
            <div className='amountRow'>
                <h4>Pure: </h4> <p>{pureNodes}</p>   <button onClick={() => changeNode('pure', 1)}> + </button> <button onClick={() => changeNode('pure', -1)}> - </button>
            </div>
            <div className='nodeOutput'>
                <h4>Output: {outputCalc()}</h4>
                <p> per minute</p>
            </div>
            
        </div>
    )
}

export default NodeCard;