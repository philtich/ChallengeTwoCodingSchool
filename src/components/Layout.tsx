import React from 'react'

import { Outlet, Link } from "react-router-dom";
import { Pageheader } from './common/pageheader';
import { Pagefooter } from './common/pagefooter';


export const Layout = () => {
  return (
<>
      <Pageheader/>
      <Outlet />
      <Pagefooter/>
    </>  )
}

