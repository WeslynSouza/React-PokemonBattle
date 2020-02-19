import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import labelAndInput from '../common/form/labelAndInput'
import { init } from '../PokedexEdit/PokedexEditActions'

class PokedexEditForm extends Component{

    render(){
        const { handleSubmit, readOnly } = this.props
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput} readOnly={readOnly}
                        placeholder='Informe nome' label='Nome:' cols='12 6' />
                    <Field name='life' component={labelAndInput} readOnly={readOnly}
                        placeholder='Informe vida' label='Vida:' cols='12 6' type='Number' />
                    <Field name='attacks[0].name' component={labelAndInput} readOnly={readOnly}
                        placeholder='Informe o nome do ataque' label='1º ataque:' cols='12 4' />
                    <Field name='attacks[0].damage' component={labelAndInput} readOnly={readOnly}
                        placeholder='Informe o dano do ataque' label='Dano:' cols='12 4' type='Number' />
                    <Field name='attacks[0].hitPercentage' component={labelAndInput} readOnly={readOnly}
                        placeholder='Informe a chance de acerto do ataque' label='Acerto:' cols='12 4' type='Number' />
                    <Field name='attacks[1].name' component={labelAndInput} readOnly={readOnly}
                        placeholder='Informe o nome do ataque' label='2º ataque:' cols='12 4' />
                    <Field name='attacks[1].damage' component={labelAndInput} readOnly={readOnly}
                        placeholder='Informe o dano do ataque' label='Dano:' cols='12 4' type='Number' />
                    <Field name='attacks[1].hitPercentage' component={labelAndInput} readOnly={readOnly}
                        placeholder='Informe a chance de acerto do ataque' label='Acerto:' cols='12 4' type='Number' />
                </div>
                <div className='box-footer'>
                    <button className={`btn btn-${this.props.submitclass}`} type='submit'>{this.props.submitlabel}</button>
                    <button className='btn btn-danger' type='button' onClick={this.props.init}>Voltar</button>
                </div>
            </form>
        )
    }
}

PokedexEditForm = reduxForm({form: 'pokedexEditForm', destroyOnUnmount: false})(PokedexEditForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(PokedexEditForm)