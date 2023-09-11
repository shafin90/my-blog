'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {BsPlusSquareFill} from 'react-icons/bs'
import BlogContainer from './BlogContainer/BlogContainer';

export default function Home() {
  const router = useRouter();
  
  const move = ()=>{
    router.push('./PublishBlog')
  }
  
  
  return (

    <main className="flex min-h-screen flex-col items-center justify-start px-12 py-12">
      
      <div className='w-full flex justify-between items-center mb-16'>
      <h1 className=' inline-block text-fuchsia-950 font-bold text-5xl'>My Blog</h1>
      
      <BsPlusSquareFill className=' text-4xl text-fuchsia-950 cursor-pointer me-12 hover:text-5xl transition-all' onClick={move} />
      </div>


      <BlogContainer></BlogContainer>




    </main>
  )
}
