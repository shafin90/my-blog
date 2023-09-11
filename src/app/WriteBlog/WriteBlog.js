'use client'
import React, { useContext, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles
import { authContext } from '../layout';
import { useRouter } from 'next/navigation';

const WriteBlog = () => {
    const { img, trigger, setTrigger, title, description } = useContext(authContext);
    const [editorHtml, setEditorHtml] = useState(``);
    const router = useRouter();

    // Configure the toolbar options
    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean'],
            [{ 'size': ['small', false, 'large', 'huge'] }], // Font size options
            [{ 'color': [] }, { 'background': [] }], // Add text color and background color options
        ],
    };
    // Handle changes in the editor content
    const handleEditorChange = (html) => {
        setEditorHtml(html);
    };

    // Function to handle publishing
    const handlePublish = () => {
        // Create a JSON object with the blog content
        const blogData = {
            content: editorHtml,
            image: img,
            title,
            description
        };

        // Send the data to the server using the fetch API
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blogData),
        })
            .then((response) => {
                if (response.ok) {
                    // Blog was successfully published
                    setTrigger(!trigger);
                    router.push('/')
                } else {
                    // Handle errors here
                    alert('Failed to publish the blog.');
                }
            })
            .catch((error) => {
                // Handle network errors
                console.error('Network error:', error);
            });
    };

    return (
        <div>
            <ReactQuill
                theme="snow"
                value={editorHtml}
                modules={modules}
                onChange={handleEditorChange}
                style={{ width: '80vw', height: '30vw' }}
            />
            <button className=' bg-fuchsia-950 w-24  h-10  mt-14 text-white hover:bg-fuchsia-800 cursor-pointer' onClick={handlePublish}>Publish</button>
        </div>
    );
};

export default WriteBlog;
