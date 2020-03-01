import React from 'react'
import Grid from '../layout/grid'

export default props =>(
    <Grid cols={props.cols} offset={props.offset}>
        <div className='box' style={{borderColor: props.color ? props.color : ''}}>
            <div className='box-header with-border'>
                <h3 className='box-title'><strong>{props.title}</strong></h3>
            </div>
            <div className='box-body'>
                {props.children}
            </div>
        </div>
    </Grid>
)