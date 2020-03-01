import React , { Component } from 'react'
import Content from '../common/template/content'
import ValueBoxSolid from '../common/widget/valueBoxSolid'

import PokedexProfile from './pokedexProfile'
import PokedexList from './pokedexList'

class Pokedex extends Component{

    render(){
        return(
            <div>
                <Content>
                    <ValueBoxSolid id='boxPokedex' title='Pokedex' color='box-danger' icon='book'>
                        <PokedexList/>
                        <div className='col-sm-offset-2' id='linha'></div>
                        <PokedexProfile/>
                    </ValueBoxSolid>
                </Content>
            </div>
        )
    }
}

export default Pokedex