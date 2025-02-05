import React from 'react'
import { NavBarApp } from '../components'

export const AppLayout = ({children}) => {
  return (
    <div className='div-layout'>        
        <div className='div-children'>
          <div className='div-children-content'>
            {children}
            </div>
        </div>
    </div>
  )
}
