import React, { Children } from 'react'

export default props =>(
    <ul className={`list-group ${props.unbordered ? 'list-group-unbordered' : ''}`} id={props.id}>
        {props.children}
    </ul>
)