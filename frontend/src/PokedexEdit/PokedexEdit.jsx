import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tabs/tabs'
import TabsHeader from '../common/tabs/tabsHeader'
import TabHeader from '../common/tabs/tabHeader'
import TabToolsSearch from '../common/tabs/tabToolsSearch'
import TabsContent from '../common/tabs/tabsContent'
import TabContent from '../common/tabs/tabContent'
import { init, create, update, remove, search, change } from './PokedexEditActions'

import List from './PokedexEditList'
import Form from './PokedexEditForm'

class PokedexEdit extends Component{

    componentWillMount(){
        this.props.init()
    }

    render(){
        return(
            <div>
                <ContentHeader title='Editar Pokedex' small='Versão 1.0'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='book' target='tabList'/>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
                            <TabHeader label='Alterar' icon='gear' target='tabUpdate'/>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
                            <TabToolsSearch id='tabList' onClick={this.props.search} placeholder='Pesquisar:'
                                value={this.props.pokedex.search} onChange={this.props.change}/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List/>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create}
                                    submitclass='primary' submitlabel='Enviar'/>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update} 
                                    submitclass='info' submitlabel='Atualizar'/>
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form onSubmit={this.props.remove} readOnly='true'
                                    submitclass='danger' submitlabel='Excluir'/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ pokedex: state.pokedex })
const mapDispatchToProps = dispatch => bindActionCreators({ init, create, remove, update, search, change }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PokedexEdit)