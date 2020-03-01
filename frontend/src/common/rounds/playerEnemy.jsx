import React from 'react'
import ValueBoxSolid from '../widget/valueBoxSolid'
import Row from '../layout/row'
import Grid from '../layout/grid'
import If from '../operator/if'

export const PlayerRound = props => {
    const player = props.player
    const enemy = props.enemy
    return(
    <ValueBoxSolid title='Rodada - Player' cols='12 8' offset='0 2' color='box-danger'>
        <center>
            <If test={props.desc != ''}>
                <Row>
                    <h3>{props.desc}</h3>
                </Row>
            </If>
            <hr/>
            <Row>
                <h1>Status</h1>
                <Grid cols='12 6'>
                    <div>
                        <h3>Player: {player.name}</h3>
                        <h4>Vida: {player.life} </h4>
                    </div>
                </Grid>
                <Grid cols='12 6'>
                    <div>
                        <h3>Inimigo: {enemy.name}</h3>
                        <h4>Vida: {enemy.life} </h4>
                    </div>
                </Grid>
            </Row>
            <hr/>
            <Row>
                <h1>Escolha seu ataque!</h1>
                <button className='btn btn-info col-sm-3 col-sm-offset-3'
                    onClick={() => props.playerAtq(player.attacks[0])}>{player.attacks[0].name}</button>
                <button className='btn btn-info col-sm-3'
                    onClick={() => props.playerAtq(player.attacks[1])}>{player.attacks[1].name}</button>
            </Row>
        </center>
        <br/>
    </ValueBoxSolid>
)}

export const Transicao = props => (
    <ValueBoxSolid title='Transição' cols='12 8' offset='0 2' color='box-danger'>
        <center>
            <h2>{props.desc}</h2>
            <br/>
            <button className='btn btn-info' onClick={props.handleClick}>Proxima rodada</button>
        </center>
    </ValueBoxSolid>
)
