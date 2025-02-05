import React from 'react'
import { AppLayout } from '../layouts/AppLayout'
import { MenuPrincipal } from '../components/MenuPrincipal/MenuPrincipal'
import { MenuLayout } from '../layouts/MenuLayout'

export const HomePage = () => {
  return (
    <MenuLayout>
      <MenuPrincipal />
    </MenuLayout>
  )
}
