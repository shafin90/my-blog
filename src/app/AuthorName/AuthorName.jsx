'use client'
import { useContext } from "react";
import { authContext } from "../layout";


const AuthorName = () => {
    const {setAuthorName} = useContext(authContext);
    return (
        <div className="mb-1">
            <input onChange={e=>setAuthorName(e.target.value)} type="text" />
            
        </div>
    );
};

export default AuthorName;