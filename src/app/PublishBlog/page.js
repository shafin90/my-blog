'use client'
// This component is basically the input fields where user put necessary information  of blog such as author Name, title, description, image, blog.

import React, { useEffect } from 'react';
import WriteBlog from '../WriteBlog/WriteBlog';
import UploadImg from '../UploadImg/UploadImg';
import AuthorName from '../AuthorName/AuthorName';
import Description from '../Description/Description';
import Title from '../Title/Title';




const PublishBlog = () => {

    return (
        <div className="flex min-h-screen flex-col items-start justify-start px-6 py-6">
            <h1 data-aos="zoom-out-down" className='  mb-10 mt-7 text-5xl font-bold text-center w-full text-fuchsia-950'>Write your blog here</h1>

            <div data-aos="fade-right"  data-aos-duration="1500">
                <h1 className=' mb-1 font-bold text-lg'>Author Name:</h1>
                <AuthorName></AuthorName>

                <h1 className=' mb-1 font-bold text-lg'>Provide image url:</h1>
                <UploadImg ></UploadImg>

                <h1 className=' mb-1 font-bold text-lg'>Title of this blog:</h1>
                <Title></Title>

                <h1 className=' mb-1 font-bold text-lg'>Write short description about your blog:</h1>
                <Description></Description>

                <h1 className=' mb-1 font-bold text-lg'>Write your blog here:</h1>
                <WriteBlog></WriteBlog>
            </div>


        </div>
    );
};

export default PublishBlog;
