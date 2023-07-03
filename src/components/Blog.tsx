import React from 'react'

import daten from '../daten'

import { BlogCard } from './BlogCard'

export const Blog = () => {
  return (
    <div>
        <div className='BlogGrid'>
            {daten.map((el) => (
            <BlogCard key={el.id}
            blog={el}
            />
            ))}
        </div>
    </div>
  )
}
