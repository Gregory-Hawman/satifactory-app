import React from 'react';
import '../App.css';
import { smelters } from '../data';
import SmelterCard from './SmelterCard';

function SmeltersList() {

    return (
        <div className='smelterContainer'>
            {smelters.map((smelter, index) => {
                return (
                    <div className='smelters'>
                        <SmelterCard 
                            key={index}
                            type={smelter.type}
                            amount={smelter.amount}
                            input={smelter.input}
                            output={smelter.output}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default SmeltersList;