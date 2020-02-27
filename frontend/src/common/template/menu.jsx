import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Batalha' icon='shield'/>
        <MenuTree label='Pokedex' icon='navicon'>
            <MenuItem path='gallery' label='Galeria de Pokemon' icon='book'/>
            <MenuItem path='edit' label='Editar Pokedex' icon='edit'/>
        </MenuTree>
    </ul>
)