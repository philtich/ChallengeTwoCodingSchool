import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useState, useEffect } from 'react'


import { Blogtype } from '../Main';


type Inputs = {
  title: string;
  description: string;
}

type CreateBlogProps = {
  allBlogs: Blogtype []
}

const schema = yup.object().shape({
  title: yup.string().min(4).required(),
  description: yup.string().min(10).required(),
  })

export const CreateBlog = ({ allBlogs }: CreateBlogProps )  => {
    
    const { register,
        handleSubmit,
        formState: { errors },
        } = useForm<Inputs>({
          resolver: yupResolver(schema),
        })

         
        
        const onSubmit = (data: Inputs, e: any) => {
          e.target.reset(); 
          const now = new Date();

          const newBlog = {
           id: Math.random(),
           title:  data.title,
           desc: data.description,
           date: now.toLocaleDateString(),
           image: "https://www.tots100.co.uk/wp-content/uploads/2018/02/Is-Your-Blog-Due-for-an-Update-1.jpg"
          }

          

          alert("Der Blogeintrag wurde erfolgreich übermittelt!")
      
        }
  return (
    <div className='container p-6 flex flex-col gap-4 items-center '>
        <h1 className='text-blue-600 text-2xl font-bold p-4'>Neuen Blogbeitrag erstellen:</h1>

        <form className="flex flex-col items-center justify-center gap-6 w-full lg:w-1/2" onSubmit={handleSubmit(onSubmit)}>  
            <div className='flex flex-col gap-2 w-full md:w-1/2'>         
                <input className="inputBlog" type="text" placeholder='Title' {...register("title")}/>
                <textarea rows={5} className="inputBlog" placeholder='Description' {...register("description")}/>
                <input type="hidden" value={`${Date.now()}`} />
            </div> 
            <button className="p-2 bg-blue-600 text-white rounded-md md:w-1/3" type='submit'>Create Blog</button>
            <div className='flex flex-col gap-4'>
                {errors.title && <p className='errorP'>{"Bitte geben Sie einen Titel mit mind. 4 Zeichen ein!"}</p>}
                {errors.description && <p className='errorP'>{"Bitte geben Sie eine Beschreibung mit mind. 10 Zeichen ein!"}</p>}
            </div> 
        </form>
    </div>
  )
}
