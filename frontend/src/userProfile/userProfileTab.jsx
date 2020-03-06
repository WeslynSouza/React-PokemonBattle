import React, { Component } from 'react'

import Tabs from '../common/tabs/tabs'
import TabsHeader from '../common/tabs/tabsHeader'
import TabsContent from '../common/tabs/tabsContent'
import TabHeader from '../common/tabs/tabHeader'
import TabContent from '../common/tabs/tabContent'
import UserProfileConfig from './userProfileConfig'

class UserProfileTab extends Component{

    constructor(props){
        super(props)
        this.state = { selected: 0 }
        self = this
    }

    alteraSelect(selected){
        self.setState({ selected })
    }
    
    render(){
        return(
            <Tabs>
                <TabsHeader>
                    <TabHeader label='Perfil' icon='user' target='UserProfile' 
                        visible='true' selected={this.state.selected == 0} onClick={() => this.alteraSelect(0)}/>
                    <TabHeader label='Galeria' icon='book' target='UserGallery'
                        visible='true' selected={this.state.selected == 1} onClick={() => this.alteraSelect(1)}/>
                    <TabHeader label='Configurações' icon='gear' target='UserConfig'
                        visible='true' selected={this.state.selected == 2} onClick={() => this.alteraSelect(2)}/>
                </TabsHeader>
                <TabsContent>
                    <TabContent id='UserProfile' selected={this.state.selected == 0} visible={this.state.selected == 0}>
                        <h1>Informações do usuário</h1>
                    </TabContent>
                    <TabContent id='UserGallery' selected={this.state.selected == 1} visible={this.state.selected == 1}>
                        
                    </TabContent>
                    <TabContent id='UserConfig' selected={this.state.selected == 2} visible={this.state.selected == 2}>
                        <UserProfileConfig/>
                    </TabContent>
                </TabsContent>
            </Tabs>
        )
    }
}

export default UserProfileTab