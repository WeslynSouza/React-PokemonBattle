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
import { init, create, update, remove, search, change } from './pokedexEditActions'
import { selectTab } from '../common/tabs/tabActions'

import List from './pokedexEditList'
import Form from './pokedexEditForm'

class PokedexEdit extends Component{

    componentWillMount(){
        this.props.init()
    }

    render(){
        return(
            <div>
                <ContentHeader title='Editar Pokedex'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='book' target='tabList' onClick={() => this.props.selectTab('tabList')}/>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' onClick={() => this.props.selectTab('tabCreate')}/>
                            <TabHeader label='Alterar' icon='gear' target='tabUpdate' onClick={() => this.props.selectTab('tabUpdate')}/>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' onClick={() => this.props.selectTab('tabDelete')}/>
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
const mapDispatchToProps = dispatch => bindActionCreators({ init, create, remove, update, search, change, selectTab }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PokedexEdit)