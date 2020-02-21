import React from 'react'
import ValueBox from '../widget/valueBox'
import Row from '../layout/row'

export const PlayerRound = props => {
    const player = props.player
    const enemy = props.enemy
    return(
    <ValueBox title='Rodada - Player' cols='12 8' offset='col-sm-offset-2' color='#00c0ef'>
        <center>
            <div className='box col-sm-4'>
                <h3>
                    Player: {player.name} 
                </h3>
                <h4> Vida: {player.life} </h4>
            </div>
            <div className='box col-sm-4'>
                <h3>
                    Inimigo: {enemy.name} 
                </h3>
                <h4> Vida: {enemy.life} </h4>
            </div>
        </center>
        <Row>
            <button className='btn btn-info col-sm-3 col-sm-offset-3'>{player.attacks[0].name}</button>
            <button className='btn btn-info col-sm-3'>{player.attacks[0].name}</button>
        </Row>
    </ValueBox>
)}