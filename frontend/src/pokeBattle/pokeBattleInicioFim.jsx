import React from 'react'

import ValueBox from '../common/widget/valueBox'

export function Inicio(props){
    return(
        <div>
            <ValueBox cols='12 8' offset='col-sm-offset-2' title=''>
                <center>
                    <h1>Iniciar Batalha?</h1>
                    <button className='btn btn-info' onClick={props.handleClick}>Iniciar</button>
                </center>
            </ValueBox>
        </div>
    )
}
