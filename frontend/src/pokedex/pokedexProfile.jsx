import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchProfile } from '../pokedexEdit/pokedexEditActions'

import ValueBoxSolid from '../common/widget/valueBoxSolid'
import List from '../common/template/list'
import ListItem from '../common/template/listItem'

class PokedexProfile extends Component{

    componentWillMount(){
        this.props.searchProfile()
    }

    renderAttacks(){
        let profile
        if(this.props.profile.length == 1){
            profile = this.props.profile[0]
        }else{
            profile = this.props.profile
        }

        const attacks = profile.attacks || []
        return attacks.map( atk =>(
            <tr key={atk._id}>
                <td className='col-sm-6 col-xs-12'>{atk.name}</td>
                <td className='col-sm-3 col-xs-12'>{atk.damage}</td>
                <td className='col-sm-3 col-xs-12'>{atk.hitPercentage}</td>
            </tr>
        ))
    }

    render(){
        let profile
        if(this.props.profile.length == 1){
            profile = this.props.profile[0]
        }else{
            profile = this.props.profile
        }
        return(
            <div className='col-sm-10 col-xs-9' id='contentPokedex'>
                <div className='col-sm-12'>
                    <div className='col-sm-6 col-xs-12'>
                        <img className='box-img2' src={profile.img} width='100%'/>
                    </div>
                    <div className='col-sm-6 col-xs-12'>
                        <List id='ul'>
                            <ListItem id='listItem'>Nome: {profile.name}</ListItem>
                            <ListItem id='listItem'>Tipo: {profile.type}</ListItem>
                            <ListItem id='listItem'>Vida: {profile.life}</ListItem>
                        </List>
                    </div>
                    <div className='col-sm-12'>
                        <br/>
                        <ValueBoxSolid title='Ataques' color='box-default'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Nome:</th>
                                        <th>Dano:</th>
                                        <th>Acerto:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderAttacks()}
                                </tbody>
                            </table>
                        </ValueBoxSolid>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ profile: state.pokedex.profile })
const mapDispatchToProps = dispatch => bindActionCreators({ searchProfile }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PokedexProfile)