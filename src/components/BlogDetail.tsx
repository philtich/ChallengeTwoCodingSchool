import React, { useContext } from 'react'

import {  Link, useParams } from "react-router-dom"

import daten from '../daten'

export const BlogDetail = () => {
    
    const { id } = useParams()
    const thisId = daten.find(blog => blog.id == id)
    
    return (
        <div className='container py-6 flex-col flex gap-2'>
            <h2 className='text-3xl text-blue-600 font-bold'>{thisId.title}</h2>
            <p>{thisId.desc}</p>
            <div className='flex flex-row gap-6'>
                {thisId.id > 1 && (<Link to={`/${thisId.id-1}`}>Vorheriger Blog</Link>)}
                {thisId.id < daten.length && (<Link to={`/${thisId.id+1}`}>Nächster Blog</Link>)} 
           </div>
            <img className="aspect-4/3 w-2/3 lg:w-1/2"src={`${thisId.image}`}></img>
        </div>
    )
}



