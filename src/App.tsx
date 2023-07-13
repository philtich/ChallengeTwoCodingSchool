import { useState, useEffect } from 'react'

import './index.css'
import { Main } from './components/Main'

import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import { Layout } from "./components/Layout";

import { BlogDetail } from './components/Blog/BlogDetail';

import { CreateBlog } from './components/Blog/CreateBlog';

export type Blogtype = {
  id: number,
  title: string,
  desc: string,
  date: string,
  image: string
}



export default function App() {
  const [blogs, setBlogs] = useState([]);

useEffect(() => {
  fetch("https://simple-blog-backend.dev.webundsoehne.com/api/v1/blogs")
    .then((response) => response.json())
    .then((data) => setBlogs(data))
    .catch((error) => console.log(error));
},[])
 
  return (

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="/:id" element={<BlogDetail allBlogs={blogs} 
             />}>
      </Route>
      <Route path="/createBlog" element={<CreateBlog allBlogs={blogs} />}>
      </Route>
    </Route> 
  </Routes>
  </BrowserRouter>
  )
}

