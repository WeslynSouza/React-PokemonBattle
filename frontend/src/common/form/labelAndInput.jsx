import React from 'react'
import Grid from '../layout/grid'
import If from '../operator/if'

export default props =>(
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            
            <If test={props.btn}>
                <div className='input-group'>
                    <div className='input-group-addon btn btn-info' onClick={props.onClick}>
                        <i className='fa fa-search'></i>
                    </div>
                    <input {...props.input} className='form-control'
                    placeholder={props.placeholder} readOnly={props.readOnly}
                    type={props.type} value={props.value} onChange={props.onChange} required />
                </div>
            </If>

            <If test={!props.btn}>
                <input {...props.input} className='form-control'
                    placeholder={props.placeholder} readOnly={props.readOnly}
                    type={props.type} required />
            </If>
        </div>
    </Grid>
)