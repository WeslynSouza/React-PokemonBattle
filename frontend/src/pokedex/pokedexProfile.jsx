import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ValueBoxSolid from '../common/widget/valueBoxSolid'

import List from '../common/template/list'
import ListItem from '../common/template/listItem'

class PokedexProfile extends Component{

    render(){
        return(
            <div className='col-sm-10 col-xs-9' id='contentPokedex'>
                <div className='col-sm-12'>
                    <div className='col-sm-6 col-xs-12'>
                        <img className='box-img2' src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/bulbasaur-bulb.jpg' width='100%'/>
                    </div>
                    <div className='col-sm-6 col-xs-12'>
                        <List id='ul'>
                            <ListItem id='listItem'>Nome: Bulbasaur</ListItem>
                            <ListItem id='listItem'>Tipo: Grama</ListItem>
                            <ListItem id='listItem'>Vida: 120</ListItem>
                        </List>
                    </div>
                    <div className='col-sm-12'>
                        <br/>
                        <ValueBoxSolid title='Ataques' color='box-default'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Nome:</th>
                                        <th>Dano:</th>
                                        <th>Acerto:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1º Ataque</td>
                                        <td>1º Dano</td>
                                        <td>1º Acerto</td>
                                    </tr>
                                    <tr>
                                        <td>2º Ataque</td>
                                        <td>2º Dano</td>
                                        <td>2º Acerto</td>
                                    </tr>
                                </tbody>
                            </table>
                        </ValueBoxSolid>
                    </div>
                </div>
            </div>
        )
    }
}

export default PokedexProfile