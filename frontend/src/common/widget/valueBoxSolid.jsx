import React from 'react'

export default props => (
    <div className={`box box-solid ${props.color}`} id={props.id}>
        <div className='box-header with-border'>
            <h2 className='box-title'>{props.title}</h2>
        </div>
        <div className='box-body'>
            {props.children}
        </div>
    </div>
)