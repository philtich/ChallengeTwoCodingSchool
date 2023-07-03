import { useState } from 'react'

import './index.css'
import { Main } from './components/Main'

import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import { Layout } from "./components/Layout";

import { BlogDetail } from './components/BlogDetail';



export default function App() {
 
  return (

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="/:id" element={<BlogDetail />}>
      </Route>
    </Route> 
  </Routes>
  </BrowserRouter>
  )
}

