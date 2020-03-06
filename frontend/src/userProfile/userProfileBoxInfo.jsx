import React from 'react'
import List from '../common/template/list'
import ListItem from '../common/template/listItem'

export default props => (
    <div className='box box-danger'>
        <div className='box-body box-profile'>
            <img className='profile-user-img img-responsive img-circle' alt='User profile picture'
            src='https://cdn.weasyl.com/static/media/20/97/c2/2097c262fee251d056e7d40a177bc8cef7c9006b8776abb0f2ba0c8e0d0ad134.png'/>
            <h3 className='profile-username text-center'>{props.name}</h3>
            <p className='text-muted text-center'>{props.email}</p>
            <List unbordered='true'>
                <ListItem>Partidas: 82</ListItem>
                <ListItem>Vistorias: 56</ListItem>
            </List>
        </div>
    </div>
)