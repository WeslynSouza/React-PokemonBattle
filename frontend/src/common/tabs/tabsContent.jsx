import React from 'react'

export default props => (
    <div className='tab-content' id={props.id}>
        {props.children}
    </div>
)