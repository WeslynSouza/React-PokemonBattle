import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols} offset={props.offset}>
        <div className={`box box-solid ${props.color}`} id={props.id}>
            <div className='box-header with-border'>
                <h2 className='box-title'>
                    <span><i className={`fa fa-${props.icon}`}></i> </span>
                    <strong>{props.title}</strong>
                </h2>
            </div>
            <div className='box-body'>
                {props.children}
            </div>
        </div>
    </Grid>
)