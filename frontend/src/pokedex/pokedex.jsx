import React , { Component } from 'react'
import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import Tabs from '../common/tabs/tabs'
import TabsContent from '../common/tabs/tabsContent'

class Pokedex extends Component{

    render(){
        return(
            <div>
                <ContentHeader title='Pokedex' small='Versão 1.0'/>
                <Content>
                    <Tabs>
                        <TabsContent id='tabPokedex'>
                                <div className='btn-group-vertical col-sm-3' id='listPokedex'>
                                    <div className='btn-group-item active btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                    <div className='btn-group-item btn btn-default'>Pokemon</div>
                                </div>
                                <div className='col-sm-9' id='contentPokedex'>

                                </div>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default Pokedex