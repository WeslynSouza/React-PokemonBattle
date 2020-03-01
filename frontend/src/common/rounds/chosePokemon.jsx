import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getList } from '../../pokedexEdit/pokedexEditActions'

import ValueBox from '../widget/valueBox'
import List from '../template/list'
import ListItem from '../template/listItem'

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
                        <List>
                            <ListItem>
                                <div>
                                    <img className='box-img' src={pk.img} width='100%' height='100%'/>
                                </div>
                            </ListItem>
                            <ListItem>Vida: {pk.life}</ListItem>
                            <ListItem>Tipo: {pk.type}</ListItem>
                            <ListItem btn='btn btn-info' onClick={() => this.props.handleClick(pk, list[rand])}>Selecionar</ListItem>
                        </List>
                    </ValueBox>
                </div>
        )})
    }

    render(){
        return(
            <div className='box box-solid box-danger'>
                <div className='box-header with-border'>
                    <h3 className='box-title'>Selecionar Pokemon</h3>
                </div>
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