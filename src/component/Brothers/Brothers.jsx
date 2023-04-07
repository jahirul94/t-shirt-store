import React, { useContext } from 'react';
import { rings } from '../Grandpaa/Grandpaa';

const Brothers = () => {
    const ring = useContext(rings)
    return (
        <div>
             <h2>My Brothers</h2>
             <p>{ring}</p>
        </div>
    );
};

export default Brothers;