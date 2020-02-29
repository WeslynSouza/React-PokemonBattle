import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getList } from '../pokedexEdit/pokedexEditActions'

class PokedexList extends Component{

    componentWillMount(){
        this.props.getList()
    }

    renderPokemon(){
        const list = this.props.list || []
        return list.map( pk => (
            <div className='btn-group-item btn btn-github' key={pk._id}>{pk.name}</div>
        ))
    }

    render(){
        return(
            <div className='btn-group-vertical col-sm-2 col-xs-3' id='listPokedex'>
                {this.renderPokemon()}
                <div className='btn-group-item btn btn-github'>Teste</div>
                <div className='btn-group-item btn btn-github'>Teste</div>
                <div className='btn-group-item btn btn-github'>Teste</div>
                <div className='btn-group-item btn btn-github'>Teste</div>
                <div className='btn-group-item btn btn-github'>Teste</div>
                <div className='btn-group-item btn btn-github'>Teste</div>
                <div className='btn-group-item btn btn-github'>Teste</div>
                <div className='btn-group-item btn btn-github'>Teste</div>
                <div className='btn-group-item btn btn-github'>Teste</div>
                <div className='btn-group-item btn btn-github'>Teste</div>
                <div className='btn-group-item btn btn-github'>Teste</div>
                <div className='btn-group-item btn btn-github'>Teste</div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.pokedex.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PokedexList)