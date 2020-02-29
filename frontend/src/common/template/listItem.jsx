import React from 'react'

export default props => (
    <li className={`list-group-item ${props.btn}`} id={props.id} onClick={props.onClick}>{props.children}</li>
)