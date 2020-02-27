import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './app'
import PokeBattle from '../pokeBattle/pokeBattle'
import PokedexEdit from '../pokedexEdit/pokedexEdit'

export default props =>(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={PokeBattle}/>
            <Route path='Edit' component={PokedexEdit}/>
        </Route>
        <Redirect from='*' to='/'/>
    </Router>
)