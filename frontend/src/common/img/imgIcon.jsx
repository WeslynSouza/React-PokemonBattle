import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols} offset={props.offset}>
        <img className='img-responsive img-circle' src={props.src} 
        alt={props.alt} onClick={props.onClick}></img>
    </Grid>
)