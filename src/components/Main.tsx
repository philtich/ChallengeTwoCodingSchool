import React from 'react'

import daten from '../daten'
import { Blog } from './Blog'

export type Blogtype = {
    id: number,
    title: string,
    desc: string,
    date: string,
    image: string
}

export const Main = () => {
  return (
    <>
    <Blog/>
    </>
  )
}
