import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import { Inicio } from '../common/rounds/inicioFim'
import ChosePokemon from '../common/rounds/chosePokemon'
import { definePlayerAndEnemy } from './pokeBattleActions'
import { PlayerRound } from '../common/rounds/playerEnemy'
import If from '../common/operator/if'

class PokeBattle extends Component {

    constructor(props){
        super(props)
        this.state = { estado: 0 }
        self = this
    }

    alteraEstado(estado){
        this.setState({ estado })
    }

    selecionaPokemon(player, enemy){
        self.props.definePlayerAndEnemy(player, enemy)
        self.alteraEstado(2)
    }

    render(){
        return(
            <div>
                <ContentHeader title='Batalha Pokemon' small='Versão 1.0'/>
                <Content>
                    <br/>
                    <If test={this.state.estado == 0}>
                        <Inicio handleClick={() => this.alteraEstado(1)}/>
                        </If>
                    <If test={this.state.estado == 1}>
                        <ChosePokemon click={this.selecionaPokemon} />
                    </If>
                    <If test={this.state.estado == 2}>
                        <PlayerRound player={this.props.battle.player} enemy={this.props.battle.enemy}/>
                    </If>
                </Content>
            </div>
        )       
    }
}

const mapStateToProps = state => ({ battle: state.battle })
const mapDispatchToProps = dispatch => bindActionCreators({ definePlayerAndEnemy }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PokeBattle)
