import React, { Component } from 'react'
import { connect } from 'react-redux'

import Grid from '../common/layout/grid'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import UserProfileTab from './userProfileTab'
import UserProfileBoxInfo from './userProfileBoxInfo'

class UserProfile extends Component{

    render(){

        return(
            <div>
                <ContentHeader title='Perfil do usuário'/>
                <Content>
                    <br/>
                    <Grid cols='12 3'>
                        <UserProfileBoxInfo name={this.props.user.name} email={this.props.user.email}/>
                        <br/>
                        <div></div>
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