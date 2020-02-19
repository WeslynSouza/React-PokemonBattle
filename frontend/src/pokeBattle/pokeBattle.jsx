import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import { Inicio } from './pokeBattleInicioFim'
import ChosePokemon from './pokemonBattlePokemon'

export default class PokeBattle extends Component {

    constructor(props){
        super(props)
        this.state = { estado: 0 }
    }

    alteraEstado(estado){
        this.setState({ estado })
    }

    render(){
        if(this.state.estado == 0){
            return(
                <div>
                    <ContentHeader title='Batalha Pokemon' small='Versão 1.0'/>
                    <Content>
                        <br/>
                        <Inicio handleClick={() => this.alteraEstado(1)}/>
                    </Content>
                </div>
            )
        }else if(this.state.estado == 1){
            return(
                <div>
                    <ContentHeader title='Batalha Pokemon' small='Versão 1.0'/>
                        <Content>
                            <br/>
                            <ChosePokemon/>
                        </Content>
                </div>
            )
        }
    }
}
