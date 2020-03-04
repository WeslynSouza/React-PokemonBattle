import React, { Component } from 'react'
import { connect } from 'react-redux'
import MenuItem from './menuItem'
import MenuTree from './menuTree'
import MenuHeader from './menuHeader'
import If from '../operator/if'

class Menu extends Component{

    render(){
        let level = ''
        if(this.props.user != null) level = this.props.user.level
        return(
            <ul className='sidebar-menu tree'>
                <MenuHeader label='Navegação Principal'/>
                <MenuItem path='/' label='Batalha' icon='shield'/>
                <MenuTree label='Pokedex' icon='navicon'>
                    <MenuItem path='gallery' label='Galeria de Pokemon' icon='book'/>
                    <If test={level}>
                        <MenuItem path='edit' label='Editar Pokedex' icon='edit'/>
                    </If>
                </MenuTree>
            </ul>
        )
    }
}

const mapStateToProps = state => ({ user: state.auth.user})
export default connect(mapStateToProps)(Menu)