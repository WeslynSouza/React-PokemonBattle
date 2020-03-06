import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getList } from '../pokedexEdit/pokedexEditActions'

import ValueBox from '../common/widget/valueBox'
import List from '../common/template/list'
import ListItem from '../common/template/listItem'

class UserProfileGallery extends Component{

    componentWillMount(){
        this.props.getList()
    }

    renderPokemon(){
        const list = this.props.list || []
        return list.map(pk => (
            <div key={pk._id}>
                <ValueBox cols='6 4' title={pk.name} btn='true'>
                    <List>
                        <ListItem>
                            <div>
                                <img className='box-img' src={pk.img} width='100%'/>
                            </div>
                        </ListItem>
                        <ListItem>
                            Vitorias: 
                        </ListItem>
                    </List>
                </ValueBox>
            </div>
        ))
    }

    render(){
        return(
            <div id='userGallery'>
                {this.renderPokemon()}
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.pokedex.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(UserProfileGallery)