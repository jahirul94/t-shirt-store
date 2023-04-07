import React from 'react';
import MyChild from '../MyChild/MyChild';

const MySelf = ({ring}) => {
    return (
        <div>
            <h2>Its Me</h2>
             <MyChild ring ={ring}></MyChild>
        </div>
    );
};

export default MySelf;