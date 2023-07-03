import React, { useContext } from 'react'

import {  Link, useParams } from "react-router-dom"

import daten from '../daten'

export const BlogDetail = () => {
    
    const { id } = useParams()
    const thisId = daten.find(blog => blog.id == id)

    console.log(thisId);
    
    
    return (
        <div>
            <h2>{thisId.title}</h2>
            <p>{thisId.desc}</p>
            <img src={`${thisId.image}`}></img>
           {thisId.id < 15 && (<Link to={`/${thisId.id+1}`}>Next Article</Link>)} 
            {thisId.id > 1 && (<Link to={`/${thisId.id-1}`}>Previous Article</Link>)}
        </div>
    )
}



