import React, { createContext, useState } from 'react';
import './Grandpa.css';
import Uncle from '../Uncle/Uncle';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';

/* 
*context api
*1. call createContext with default value
*2. set value of the context with uppercase
*3. make sure you export the context to use it in other places
*4. wrap your child context using ..context.Provider
*5. Provide a value 
*6. to consume the context from child component 
*7. useContext hook and you will need to pass the contextName
*8. Make sure you took a note*******
*/

export const RingContext = createContext('diamond');

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Diamond Ring';

    const handleBuyaHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse);
    }
    return (
        <RingContext.Provider value={[ornament, house]}>
            <div className='grandpa'>
                <h3>Grand pa</h3>
                <button onClick={handleBuyaHouse}>Buy a House</button>
                <p>House: {house}</p>
                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;