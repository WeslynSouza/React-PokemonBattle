import React, { Component } from 'react'
import { connect } from 'react-redux'

import LabelAndInput from '../form/labelAndInput'
import If from '../operator/if'

class TabHeaderTools extends Component{

    render(){

        const selected = this.props.tab.selected === this.props.id
        return(
            <If test={selected}>
                <li>
                    <LabelAndInput btn='true' placeholder={this.props.placeholder} onClick={this.props.onClick}
                        onChange={this.props.onChange} value={this.props.value}/>
                </li>
            </If>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tabs })
export default connect(mapStateToProps)(TabHeaderTools)
