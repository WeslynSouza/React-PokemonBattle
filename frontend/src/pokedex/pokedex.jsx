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
                        <TabsContent>
                            
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default Pokedex