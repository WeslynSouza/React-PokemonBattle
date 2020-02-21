import React from 'react'

import ValueBox from '../widget/valueBox'

export function Inicio(props){
    return(
        <div>
            <ValueBox cols='12 8' offset='col-sm-offset-2' title='' color='#00c0ef'>
                <center>
                    <h1>Iniciar Batalha?</h1>
                    <button className='btn btn-info' onClick={props.handleClick}>Iniciar</button>
                </center>
            </ValueBox>
        </div>
    )
}
