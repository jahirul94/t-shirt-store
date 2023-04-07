import React, { useContext } from 'react';
import { rings } from '../Grandpaa/Grandpaa';

const MyChild = ({ring}) => {
    const angti = useContext(rings)
    return (
        <div>
             <h2>My Child</h2>
              <p>From CONTEXT : {angti}</p>
             <p><small>{ring}</small></p>
        </div>
    );
};

export default MyChild;