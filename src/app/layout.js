'use client'
import { createContext, useEffect, useState } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const authContext = createContext();



export default function RootLayout({ children }) {
  const [img, setImg] = useState(null);
  const [description, setDescription] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [trigger, setTrigger] = useState(true);
  const [trigger2,setTrigger2] = useState(true);
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');
  const [authorName, setAuthorName] = useState('');
  
  
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => res.json())
      .then(data =>setBlogs(data))
  }, [trigger, setTrigger])

  const data = {
     
    img,
    setImg,
    description,
    setDescription,
    blogs,
    trigger,
    setTrigger,
    description,
    setDescription,
    title,
    setTitle,
    id,
    setId,
    trigger2,
    setTrigger2,
    authorName,
    setAuthorName
  }

  return (
    <html lang="en">
      <authContext.Provider value={data}>
        <body className={inter.className}>{children}</body>
      </authContext.Provider>
    </html>
  )
}
