import React from 'react'
import Grid from '../layout/grid'
import Row from '../layout/row'

export default props =>(
    <Row>
        <Grid cols={props.cols} offset={props.offset}>
            <div className='box box-info'>
                <div className='box-header with-border'>
                    <h3 className='box-title'>{props.title}</h3>
                </div>
                <div className='box-body'>
                    {props.children}
                </div>
            </div>
        </Grid>
    </Row>
)