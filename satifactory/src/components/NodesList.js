import React from 'react';
import '../App.css';
import { nodes } from '../data';
import NodeCard from './NodeCard';

function NodesList() {

    return (
        <div className='nodesContainer'>
            {nodes.map((node, index) => {
                return (
                    <div className='nodes'>
                        <NodeCard 
                            key={index}
                            type={node.type}
                            impure={node.amounts.impure}
                            normal={node.amounts.normal}
                            pure={node.amounts.pure}
                        />
                    </div>
                )
            })}

        </div>
    )
}

export default NodesList;