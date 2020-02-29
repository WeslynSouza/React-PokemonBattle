import React, { Component } from 'react'

import Content from '../common/template/content'
import { Inicio, Fim } from '../common/rounds/inicioFim'
import ChosePokemon from '../common/rounds/chosePokemon'
import { PlayerRound, Transicao } from '../common/rounds/playerEnemy'
import If from '../common/operator/if'

class PokeBattle extends Component {

    constructor(props){
        super(props)
        this.state = { estado: 0, player: {}, enemy: {}, descricao: '' }
        self = this
    }

    alteraEstado(estado){
        this.setState({ estado })
    }

    selecionaPokemon(player, enemy){
        self.setState({ ...self.state, estado: 2, player, enemy, descricao: ''})
    }

    playerAtaque(ataque){
        const rand = Math.floor(Math.random() * 100)
        if(rand <= ataque.hitPercentage){
            if(self.state.enemy.life >= ataque.damage){
                const vidaAtual = self.state.enemy.life - ataque.damage
                self.setState({ ...self.state, estado: 3, enemy: { ...self.state.enemy, life: vidaAtual}
                    , descricao: `${self.state.player.name} usou ${ataque.name}, ${self.state.enemy.name} perdeu ${ataque.damage} de vida!`})
            }else{
                const dano = ataque.damage - self.state.enemy.life
                self.setState({ ...self.state, estado: 3, enemy: { ...self.state.enemy, life: 0}
                    , descricao: `${self.state.player.name} usou ${ataque.name}, ${self.state.enemy.name} perdeu ${dano} de vida!`})
            }
        }else{
            self.setState({ ...self.state, estado: 3, descricao: `${self.state.player.name} errou o ataque!`})
        }
    }

    inimigoAtaque(){
        const randAtaque = Math.floor(Math.random() * this.state.enemy.attacks.length)
        const ataque = this.state.enemy.attacks[randAtaque]
        const rand = Math.floor(Math.random() * 100)
        if(rand <= ataque.hitPercentage){
            if(this.state.player.life >= ataque.damage){
                const vidaAtual = this.state.player.life - ataque.damage
                this.setState({ ...this.state, estado: 2, player: { ...this.state.player, life: vidaAtual}
                    , descricao: `${self.state.enemy.name} usou ${ataque.name}, ${self.state.player.name} perdeu ${ataque.damage} de vida!`})
            }else{
                const dano = ataque.damage - this.state.enemy.life
                this.setState({ ...this.state, estado: 2, player: { ...this.state.player, life: 0}
                    , descricao: `${self.state.enemy.name} usou ${ataque.name}, ${self.state.player.name} perdeu ${dano} de vida!`})
            }
        }else{
            self.setState({ ...this.state, estado: 2, descricao: `${self.state.enemy.name} errou o ataque!`})
        }
    }

    render(){
        return(
            <div>
                <Content>
                    <If test={this.state.estado == 0}>
                        <Inicio handleClick={() => this.alteraEstado(1)}/>
                        </If>
                    <If test={this.state.estado == 1 }>
                        <ChosePokemon handleClick={this.selecionaPokemon} />
                    </If>
                    <If test={this.state.estado == 2 && this.state.player.life != 0 && this.state.enemy.life != 0}>
                        <PlayerRound player={this.state.player} enemy={this.state.enemy}
                            playerAtq={this.playerAtaque} desc={this.state.descricao}/>
                    </If>
                    <If test={this.state.estado == 3 && this.state.player.life != 0 && this.state.enemy.life != 0}>
                        <Transicao desc={this.state.descricao} handleClick={() => this.inimigoAtaque()} />
                    </If>
                    <If test={this.state.player.life == 0 && this.state.estado != 1 || this.state.enemy.life == 0 && this.state.estado != 1}>
                        <Fim desc={this.state.descricao} 
                            pokemon={this.state.player.life ? this.state.player.name : this.state.enemy.name}
                            handleClick={() => this.alteraEstado(1)}/>
                    </If>
                </Content>
            </div>
        )       
    }
}

export default PokeBattle
