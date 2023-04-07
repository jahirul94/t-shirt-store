import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brothers from '../Brothers/Brothers';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
    return (
        <div>
             <h2>Father</h2>
               <section className='familys'>
                    <MySelf ring ={ring}></MySelf>
                    <Brothers></Brothers>
                    <Sister></Sister>
               </section>
        </div>
    );
};

export default Father;