'use client'
import { useContext } from "react";
import { authContext } from "../layout";


const Title = () => {
    const {setTitle} = useContext(authContext);
    return (
        <div>
            <input onChange={e=>setTitle(e.target.value)} type="text"/>
            
        </div>
    );
};

export default Title;