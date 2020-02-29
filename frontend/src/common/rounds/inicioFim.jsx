import React from 'react'

import ValueBox from '../widget/valueBox'

export const Inicio = props =>(
    <div>
        <ValueBox cols='12 8' offset='0 2' title='Batalha Pokemon' color='#00c0ef'>
            <center>
                <h1>Iniciar Batalha?</h1>
                <button className='btn btn-info' onClick={props.handleClick}>Iniciar</button>
            </center>
        </ValueBox>
    </div>
)


export const Fim = props =>(
    <div>
        <ValueBox cols='12 8' offset='0 2' title='Fim da batalha' color='#00c0ef'>
            <center>
                <h3>{props.desc}</h3>
                <hr/>
                <h2>{props.pokemon} vendeu!</h2>
                <button className='btn btn-info' onClick={props.handleClick}>Reiniciar batalha</button>
            </center>
        </ValueBox>
    </div>
)
