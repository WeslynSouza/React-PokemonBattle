import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import LabelAndInput from '../common/form/labelAndInput'

class UserProfileConfig extends Component{

    render(){

        return(
            <form role='form'>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} placeholder='Informe o nome'
                        label='Nome:' cols='12 6'/>
                    <Field name='email' component={LabelAndInput} placeholder='Informe o email'
                        label='Email:' cols='12 6'/>
                    <Field name='password' component={LabelAndInput} placeholder='Informe a senha'
                        label='Senha:' cols='12 6'/>
                    <Field name='confirm_password' component={LabelAndInput} placeholder='Confirme a senha'
                        label='Confirmar senha:' cols='12 6'/>
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