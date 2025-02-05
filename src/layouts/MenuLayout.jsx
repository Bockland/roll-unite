import React from 'react'
import { NavBarApp } from '../components'

export const MenuLayout = ({children}) => {
  return (
    <div className='div-layout-menu'>
        <div style={{padding: '10px'}}>
            <div className='div-navbar'>
                    <NavBarApp />
            </div>
            <div className='div-children'>
              <div className='div-children-content'>
              {children}
              </div>
                
            </div>
        </div>
    </div>
  )
}
