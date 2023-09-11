'use client'

import { useContext } from "react";
import { authContext } from "../layout";
import { useRouter } from "next/navigation";

const BlogContainer = () => {
    const { blogs, id, setId, setTrigger2, trigger2 } = useContext(authContext);
    console.log(blogs)
    const router = useRouter();

    const navigateToBlog = (id) => {
        setId(id);
        setTrigger2(!trigger2);
        router.push('../SinglaBlogPage')
        
    }



    return (
        <div className="w-full">
            {
                blogs.map(e => {
                    return (
                        <div onClick={() => navigateToBlog(e._id)} className=" flex justify-start items-center mb-11">
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