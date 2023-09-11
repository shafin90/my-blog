'use client'
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../layout";
import AOS from 'aos';
import 'aos/dist/aos.css';


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

    useEffect(() => {
        AOS.init();
      }, []);


    const renderContent = () => {
        // Check if currentBlog exists and has content
        if (currentBlog && currentBlog.content) {
            // Create a div with the sanitized HTML content
            return <div data-aos="fade-up"  data-aos-duration="2000" style={style} dangerouslySetInnerHTML={{ __html: currentBlog.content }} />;
        }
        
        // Return null or an appropriate message if there's no content
        return null;
    }

    return (
        <div >
            <h1  data-aos-duration="1000" data-aos="flip-left" className="w-full text-center font-extrabold text-fuchsia-950 text-8xl my-20">{currentBlog?.title}</h1>
            <img  data-aos-duration="2000" data-aos="zoom-in" className=" w-7/12 h-3/6 mx-auto mb-16" src={currentBlog?.image} alt={currentBlog?.title} />
            {renderContent()}
        </div>
    );
};

export default SingleBlogPage;
