import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import LabelAndInput from '../common/form/labelAndInput'
import ImgIcon from '../common/img/imgIcon'

class UserProfileConfig extends Component{

    render(){

        return(
            <form role='form' onSubmit=''>
                <div className='box-body'>
                    <h3>Selecione um icone:</h3>
                    <div className='iconBox'>
                        <ImgIcon src='https://cdn.weasyl.com/static/media/20/97/c2/2097c262fee251d056e7d40a177bc8cef7c9006b8776abb0f2ba0c8e0d0ad134.png'
                            alt='Profile img 1' cols='6 3'/>
                        <ImgIcon src='https://cdn.weasyl.com/static/media/fb/a6/36/fba636dc3758a4fe56e46ca21243df75dde7a5da1385e8ece20052a85f3dd335.png'
                            alt='Profile img 2' cols='6 3'/>
                        <ImgIcon src='https://cdn.weasyl.com/static/media/b5/2e/1c/b52e1cfb321f00c799923ed48cd5aa1aa85094706adf05b773c2419fa5e84d5c.png'
                            alt='Profile img 3' cols='6 3'/>
                        <ImgIcon src='https://cdn.weasyl.com/static/media/6a/f3/ba/6af3ba83a86e43fb2dd27d61f62f4c4f5ceeab0fb4e2d3832735428180d693da.png'
                            alt='Profile img 4' cols='6 3'/>
                    </div>
                    <Field name='name' component={LabelAndInput} placeholder='Informe o nome'
                        label='Nome:' cols='12 6'/>
                    <Field name='email' component={LabelAndInput} placeholder='Informe o email'
                        label='Email:' cols='12 6' type='email'/>
                    <Field name='password' component={LabelAndInput} placeholder='Informe a senha'
                        label='Senha:' cols='12 6' type='password'/>
                    <Field name='confirm_password' component={LabelAndInput} placeholder='Confirme a senha'
                        label='Confirmar senha:' cols='12 6' type='password'/>
                </div>
                <div className='box-footer'>
                    <button className='btn btn-info' type='submit'>Enviar</button>
                    <button className='btn btn-danger' type='reset'>Limpar</button>
                </div>
            </form>
        )
    }
}

UserProfileConfig = reduxForm({form: 'userProfileConfig', destroyOnUnmount: false})(UserProfileConfig)
export default UserProfileConfig