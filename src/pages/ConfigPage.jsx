import React from 'react'
import { useGame } from '../hooks/useGame'
import { AppLayout } from '../layouts/AppLayout';
import { Configurador } from '../components/Configurador/Configurador';
import { MenuLayout } from '../layouts/MenuLayout';

export const ConfigPage = () => {

    

    return (
        <MenuLayout>
            <Configurador />
        </MenuLayout>
    )
}
