import React from 'react'

import { Outlet, Link } from "react-router-dom";
import { Pageheader } from './common/Pageheader';
import { Pagefooter } from './common/Pagefooter';


export const Layout = () => {
  return (
<>
      <Pageheader/>
      <Outlet />
      <Pagefooter/>
    </>  )
}

