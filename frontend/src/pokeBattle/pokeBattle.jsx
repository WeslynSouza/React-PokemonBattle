import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

export default class PokeBattle extends Component {

    constructor(props){
        super(props)
        this.state = { estado: 0 }
    }

    render(){
        return(
        <div>
            <ContentHeader title='Batalha Pokemon' small='Versão 1.0'/>
            <Content>
                <br/>
                <Row>
                    <ValueBox cols='12 8' offset='col-sm-offset-2' title='Duelo'>
                        <center>
                            <h1>Iniciar Batalha?</h1>
                            <button className='btn btn-info'>Iniciar</button>
                        </center>
                    </ValueBox>
                </Row>
            </Content>
        </div>
        )
    }
}
