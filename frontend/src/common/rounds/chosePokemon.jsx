import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList } from '../../pokedexEdit/pokedeexEditActions'
import ValueBox from '../widget/valueBox'

class PokemonChose extends Component{

    componentWillMount(){
        this.props.getList()
    }

    renderPokemon(){
        const list = this.props.list || []
        let couter = list.length
        let rand = Math.floor(Math.random() * couter)
        return list.map(pk => {
            let color = ''
            switch(pk.type){
                case 'Grama' || 'grama':
                    color = '#39ff14'; break
                case 'Água' || 'água': 
                    color = '#00c0ef'; break
                case 'Fogo' || 'fogo':
                    color = 'red'; break
                case 'Pedra' || 'pedra':
                    color = '#f39c12'; break
                case 'Veneno' || 'veneno':
                    color = 'purple'; break
                case 'Eletrico' || 'eletrico':
                    color = '#ffff00'; break
                case 'Fantasma' || 'fantasma':
                    color = '#001f3f'; break
                default:
                    color = '#b87333'
            }
            return(
                <div key={pk._id}>
                    <ValueBox cols='6 4' title={pk.name} color={color || ''} btn='true' label='Selecionar'>
                        <ul className='list-group'>
                            <li className='list-group-item'>Vida: {pk.life}</li>
                            <li className='list-group-item'>Tipo: {pk.type}</li>
                            <li className={`btn btn-info list-group-item`} onClick={() => this.props.handleClick(pk, list[rand])}>Selecionar</li>
                        </ul>
                    </ValueBox>
                </div>
        )})
    }

    render(){
        return(
            <div className='box box-info'>
                <div className='box-header'/>
                <div className='box-body'>
                    <center>
                        {this.renderPokemon()}
                    </center>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.pokedex.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PokemonChose)