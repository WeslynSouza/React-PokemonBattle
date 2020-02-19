import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList } from '../PokedexEdit/PokedexEditActions'
import ValueBox from '../common/widget/valueBox'

class PokemonChose extends Component{

    componentWillMount(){
        this.props.getList()
    }

    renderPokemon(){
        const list = this.props.list || []
        return list.map(pk => (
            <h1>{pk.name}</h1>
        ))
    }

    render(){
        return(
            <div>
                <ValueBox cols='12 12' title='Escolha seu Pokemon:'>
                    <center>
                        {this.renderPokemon()}
                    </center>
                </ValueBox>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.pokedex.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PokemonChose)