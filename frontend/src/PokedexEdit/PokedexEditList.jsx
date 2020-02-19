import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './PokedexEditActions'

class List extends Component{

    componentWillMount(){
        this.props.getList()
    }

    renderRows(){
        const list = this.props.list || []
        return list.map(pk => (
            <tr key={pk._id}>
                <td>{pk.name}</td>
                <td>{pk.life}</td>
                <td>{pk.attacks[0].name} <br/> {pk.attacks[1].name}</td>
                <td>{pk.attacks[0].damage} <br/> {pk.attacks[1].damage}</td>
                <td>{pk.attacks[0].hitPercentage} <br/> {pk.attacks[1].hitPercentage}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(pk)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(pk)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render(){
        return(
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Vida</th>
                            <th>Ataque</th>
                            <th>Dano</th>
                            <th>Acerto</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.pokedex.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(List)