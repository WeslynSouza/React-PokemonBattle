import React, { Component } from 'react'
import { connect } from 'react-redux'

import Grid from '../common/layout/grid'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import List from '../common/template/list'
import ListItem from '../common/template/listItem'
import UserProfileTab from './userProfileTab'

class UserProfile extends Component{

    render(){

        return(
            <div>
                <ContentHeader title='Perfil do usuário'/>
                <Content>
                    <br/>
                    <Grid cols='12 3'>
                        <div className='box box-danger'>
                            <div className='box-body box-profile'>
                                <img className='profile-user-img img-responsive img-circle' alt='User profile picture'
                                src='https://cdn.weasyl.com/static/media/20/97/c2/2097c262fee251d056e7d40a177bc8cef7c9006b8776abb0f2ba0c8e0d0ad134.png'/>
                                <h3 className='profile-username text-center'>{this.props.user.name}</h3>
                                <p className='text-muted text-center'>{this.props.user.email}</p>
                                <List unbordered='true'>
                                    <ListItem>Item 1</ListItem>
                                    <ListItem>Item 1</ListItem>
                                </List>
                                <a href='#' className='btn btn-info btn-block'>Botão</a>
                            </div>
                        </div>
                    </Grid>

                    <Grid cols='12 9'>
                        <UserProfileTab/>
                    </Grid>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ user: state.auth.user })
export default connect(mapStateToProps)(UserProfile)