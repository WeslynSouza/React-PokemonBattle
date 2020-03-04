import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserPanel extends Component{

    render(){
        const { name } = this.props.user
        return(
            <div className='user-panel'>
                <div className='pull-left image '>
                    <img className='img-circle' alt='User Image' src='https://cdn.weasyl.com/static/media/20/97/c2/2097c262fee251d056e7d40a177bc8cef7c9006b8776abb0f2ba0c8e0d0ad134.png'/>
                </div>
                <div className='pull-left info '>
                    <p>{name}</p>
                    <a href='#'>
                        <i className='fa fa-circle text-success'></i> Online
                    </a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ user: state.auth.user })
export default connect(mapStateToProps)(UserPanel)