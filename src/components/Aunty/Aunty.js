import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/Grandpa';

const Aunty = () => {
    const [ornament, house] = useContext(RingContext);
    return (
        <div>
            <h4>Aunty</h4>
            <p>House :{house}</p>
            <p><small>Ring: {ornament}</small></p>
            <p><small>House: {house}</small></p>
        </div>
    );
};

export default Aunty;