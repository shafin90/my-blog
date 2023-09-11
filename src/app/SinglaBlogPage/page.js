'use client'
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../layout";

const SingleBlogPage = () => {
    const { id, blogs, trigger2 } = useContext(authContext);
    const [currentBlog, setCurrentBlog] = useState(null);
    
    useEffect(() => {
        const newCurrentBlog = blogs.find(e => e._id === id)
        setCurrentBlog(newCurrentBlog);
    }, [trigger2])

    const style = {
        width: "90vw",
        margin: "auto",
        height : "auto",
        marginBottom : "100px"
    }

    const renderContent = () => {
        // Check if currentBlog exists and has content
        if (currentBlog && currentBlog.content) {
            // Create a div with the sanitized HTML content
            return <div style={style} dangerouslySetInnerHTML={{ __html: currentBlog.content }} />;
        }
        
        // Return null or an appropriate message if there's no content
        return null;
    }

    return (
        <div >
            <h1 className="w-full text-center font-extrabold text-fuchsia-950 text-8xl my-5">{currentBlog?.title}</h1>
            <img className=" w-7/12 h-3/6 mx-auto mb-5" src={currentBlog?.image} alt={currentBlog?.title} />
            {renderContent()}
        </div>
    );
};

export default SingleBlogPage;
