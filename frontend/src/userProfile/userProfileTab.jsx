import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Tabs from '../common/tabs/tabs'
import TabsHeader from '../common/tabs/tabsHeader'
import TabsContent from '../common/tabs/tabsContent'
import TabHeader from '../common/tabs/tabHeader'
import TabContent from '../common/tabs/tabContent'

class UserProfileTab extends Component{
    
    render(){
        return(
            <Tabs>
                <TabsHeader>
                    <TabHeader label='Perfil' icon='user' target='UserProfile'/>
                    <TabHeader label='Configurações' icon='gear' target='UserConfig'/>
                </TabsHeader>
                <TabsContent>
                    <TabContent id='UserProfile'>

                    </TabContent>
                    <TabContent id='UserConfig'>

                    </TabContent>
                </TabsContent>
            </Tabs>
        )
    }
}

export default UserProfileTab