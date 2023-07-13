import React, { useContext } from 'react'
import {  Link, useParams } from "react-router-dom"
import { Blogtype } from '../../App'


type BlogDetailProps = {
    allBlogs: Blogtype [],
    
  }

export const BlogDetail = ({ allBlogs }: BlogDetailProps)=> {
    
    const { id }:any = useParams()
    
    const thisId = allBlogs.find(blog => blog.id == id)

    if (thisId != undefined)
    
    return (
        <div className='container py-6 flex-col flex gap-4'>
            <div className='flex flex-row justify-between text-blue-600'>
                {thisId?.id > 1 && (<Link to={`/${thisId?.id-1}`}>Vorheriger Blog</Link>)}
                {thisId?.id < allBlogs.length && (<Link to={`/${thisId?.id+1}`}>Nächster Blog</Link>)} 
           </div>
            <div className='flex gap-6 flex-col lg:flex-row'>
            <img className="aspect-4/3 w-full md:w-1/2"src={`${thisId?.image}`}></img>
                <div className='flex flex-col justify-center items-center gap-6 w-full md:w-1/2'>
                    <h2 className='text-2xl md:text-4xl font-bold container'>{thisId?.title}</h2>
                    <div className='border-t border-gray-400 w-full pt-2'>
                        <span className='pt-8'>{thisId?.date}</span>
                    </div>
                </div>
            </div>
            <p>{thisId?.desc}</p>
        </div>
    )
}



