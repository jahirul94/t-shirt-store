import React, { createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpaa.css'

export const rings  = createContext('jahir')

const Grandpaa = () => {
    const ring = "diamond dimo na gold dimo";
    return (
        <div className='grandpa'>
             <h2>Hi i'm Grandpa</h2>
              <rings.Provider value='gold-ring'>
                    <section className='familys'>
                            <Father ring ={ring}></Father>
                            <Uncle></Uncle>
                            <Aunty></Aunty>
                    </section>
              </rings.Provider>
        </div>
    );
};

export default Grandpaa;