import React from 'react'

import ValueBoxSolid from '../common/widget/valueBoxSolid'

export const Inicio = props =>(
    <div>
        <ValueBoxSolid cols='12 8' offset='0 2' title='Batalha Pokemon' color='box-danger' icon='shield'>
            <center>
                <h1><span><img src='https://i.pinimg.com/originals/c7/3c/08/c73c081aceb4bf7e3a5737c9d3ac0736.png'
                    width='30px' className='icone-img'/></span> Iniciar Batalha?</h1>
                <br/>
                <button className='btn btn-info' onClick={props.handleClick}>Iniciar</button>
            </center>
        </ValueBoxSolid>
    </div>
)


export const Fim = props =>(
    <div>
        <ValueBoxSolid cols='12 8' offset='0 2' title='Fim da batalha' color='box-danger' icon='shield'>
            <center>
                <h3>{props.desc}</h3>
                <hr/>
                <h2>{props.pokemon} venceu!</h2>
                <button className='btn btn-info' onClick={props.handleClick}>Reiniciar batalha</button>
            </center>
        </ValueBoxSolid>
    </div>
)
