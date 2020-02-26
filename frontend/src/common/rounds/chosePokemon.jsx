import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList } from '../../PokedexEdit/PokedexEditActions'
import ValueBox from '../widget/valueBox'
import Row from '../layout/row'

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
            if(pk.type == 'Grama' || pk.type == 'grama'){
                color = '#39ff14'
            }else if(pk.type == 'Água' || pk.type == 'água'){
                color = '#00c0ef'
            }else if(pk.type == 'Fogo' || pk.type == 'fogo'){
                color = 'red'
            }else if(pk.type == 'Pedra' || pk.type == 'pedra'){
                color = '#f39c12'
            }else if(pk.type == 'Veneno' || pk.type == 'veneno'){
                color = 'purple'
            }else if(pk.type == 'Eletrico' || pk.type == 'eletrico'){
                color = '#ffff00'
            }else if(pk.type == 'Fantasma' || pk.type == 'fantasma'){
                color = '#001F3F'
            }else{
                color = '#b87333'
            }
            return(
                <div key={pk._id}>
                    <ValueBox cols='6 4' title={pk.name} color={color || ''} btn='true' label='Selecionar'>
                        <ul className='list-group'>
                            <li className='list-group-item'>Vida: {pk.life}</li>
                            <li className='list-group-item'>Tipo: {pk.type}</li>
                            <li className='list-group-item'>1º Ataque: {pk.attacks[0].name}</li>
                            <li className='list-group-item'>2º ataque: {pk.attacks[1].name}</li>
                            <li className={`btn btn-info list-group-item`} onClick={() => this.props.click(pk, list[rand])}>Selecionar</li>
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