import React from 'react'

import daten from '../daten'

import { Link } from "react-router-dom";

import { Blogtype } from './Main'

type BlogProps = {
    blog: Blogtype;
}

export const BlogCard = ({blog: { id, title, desc, date, image }}: BlogProps)=> {
  return (
    <div className='first:col-span-full'>
        <div key={id}className='flex justify-center items-center gap-2 flex-col bg-blue-800 rounded-sm p-2 shadow-lg relative'>
            <h3> {title}</h3> 
            <div className='flex gap-2 text-white text-xs'>
                <span>{desc}</span>
                <span>{date}</span>
                <Link to={`/${id}`}>Mehr erfahren</Link>
                <img src={`${image}`}></img>
            </div>
        </div>
    </div>
  )
}
