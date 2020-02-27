import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './app'
import PokeBattle from '../pokeBattle/pokeBattle'
import PokedexEdit from '../pokedexEdit/pokedexEdit'
import Pokedex from '../pokedex/pokedex'

export default props =>(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={PokeBattle}/>
            <Route path='Edit' component={PokedexEdit}/>
            <Route path='Gallery' component={Pokedex}/>
        </Route>
        <Redirect from='*' to='/'/>
    </Router>
)