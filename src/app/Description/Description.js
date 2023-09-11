'use client'
import React, { useContext, useEffect } from 'react';
import { authContext } from '../layout';

const Description = () => {
    const {description, setDescription} = useContext(authContext);
    

    
    return (
        <div>
            <textarea onChange={(e=>setDescription(e.target.value))} className='p-5' rows={5} cols={40}></textarea>
            
        </div>
    );
};

export default Description;