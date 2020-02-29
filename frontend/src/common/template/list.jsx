import React, { Children } from 'react'

export default props =>(
    <ul className='list-group' id={props.id}>
        {props.children}
    </ul>
)