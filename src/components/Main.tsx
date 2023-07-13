import React from 'react'

import { useState, useEffect } from 'react'

import { BlogCard } from './Blog/BlogCard'


export type Blogtype = {
    id: number,
    title: string,
    desc: string,
    date: any,
    image: string
}


export const Main = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://simple-blog-backend.dev.webundsoehne.com/api/v1/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error));
  },[])

  return (
    <>
  <div>
        <div className='BlogGrid'>
            {blogs.map((el: any) => (
            <BlogCard key={el.id}
            blog={el}
            />
            ))}
         
        </div>
    </div>    </>
  )
}
