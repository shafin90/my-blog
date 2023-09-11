'use client'

import { useContext, useEffect } from "react";
import { authContext } from "../layout";
import { useRouter } from "next/navigation";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogContainer = () => {
    const { blogs, id, setId, setTrigger2, trigger2 } = useContext(authContext);
    console.log(blogs)
    const router = useRouter();

    const navigateToBlog = (id) => {
        setId(id);
        setTrigger2(!trigger2);
        router.push('../SinglaBlogPage')

    }


    useEffect(() => {
        AOS.init();
      }, []);

    if (blogs?.length==0) {
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
                        <div  data-aos="fade-up"
                        data-aos-duration="1000" onClick={() => navigateToBlog(e._id)} className=" flex justify-start items-center mb-11 cursor-pointer">
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