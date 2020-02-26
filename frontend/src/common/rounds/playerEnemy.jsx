import React from 'react'
import ValueBox from '../widget/valueBox'
import Row from '../layout/row'
import Grid from '../layout/grid'

export const PlayerRound = props => {
    const player = props.player
    const enemy = props.enemy
    return(
    <ValueBox title='Rodada - Player' cols='12 8' offset='0 2' color='#00c0ef'>
        <center>
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
                <button className='btn btn-info col-sm-3 col-sm-offset-3'>{player.attacks[0].name}</button>
                <button className='btn btn-info col-sm-3'>{player.attacks[1].name}</button>
            </Row>
        </center>
        <br/>
    </ValueBox>
)}