'use client'

// This is the blog page.When user click on one blog, the user is redirected to this page to read blog.

import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../layout";



const SingleBlogPage = () => {
    const { id, blogs, trigger2, authorName } = useContext(authContext);
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
            return <div  style={style} dangerouslySetInnerHTML={{ __html: currentBlog.content }} />;
        }
        
        // Return null or an appropriate message if there's no content
        return null;
    }

    return (
        <div >
            <h1  className="w-full text-center font-extrabold text-fuchsia-950 text-7xl mt-20 mb-4">{currentBlog?.title}</h1>
            <p className=" text-slate-500 mb-5 ms-32">Author Name: {currentBlog?.authorName}</p>
            <img   className=" w-7/12 h-3/6 mx-auto mb-16" src={currentBlog?.image} alt={currentBlog?.title} />
            {renderContent()}
        </div>
    );
};

export default SingleBlogPage;
