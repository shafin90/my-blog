'use client'
// This component hold all the blog. This component is shown in the home page under the logo.

import { useContext, useEffect } from "react";
import { authContext } from "../layout";
import { useRouter } from "next/navigation";

const BlogContainer = () => {
    const { blogs, id, setId, setTrigger2, trigger2 } = useContext(authContext); //Taking information from authprovider component through context API. 
    const router = useRouter(); // Declaring router to handle navigation. 

    //  This function handle navigation. User click on a blog from home page, and user will be redirected to that blog page.
    const navigateToBlog = (id) => {
        setId(id);
        setTrigger2(!trigger2);
        router.push('../SinglaBlogPage')

    }




    // When the data is not loaded fully, spinner will be shown.
    if (blogs?.length == 0) {
        return (
            <div class="flex justify-center items-center h-screen">
                <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500 border-solid"></div>
            </div>
        )
    }



    return (
        <div className="w-full">


            {
                blogs.map(e => {
                    return (
                        <div  onClick={() => navigateToBlog(e._id)} className=" flex justify-start items-center mb-11 cursor-pointer">
                            <img className=" w-96 h-56" src={e.image} />
                            <div className="w-3/5 h-56 flex flex-col justify-start items-start ms-9">
                                <h1 className=" mb-2 text-4xl font-bold">

                                    {e.title}
                                </h1>
                                <article>
                                    {e.description.slice(0, 400)} ...
                                </article>

                            </div>

                        </div>
                    )
                })
            }
        </div>
    );
};

export default BlogContainer;
