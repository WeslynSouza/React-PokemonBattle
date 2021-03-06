import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import AuthOrApp from './authOrApp'
import PokeBattle from '../pokeBattle/pokeBattle'
import PokedexEdit from '../pokedexEdit/pokedexEdit'
import Pokedex from '../pokedex/pokedex'
import UserProfile from '../userProfile/userProfile'

export default props =>(
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={PokeBattle}/>
            <Route path='Edit' component={PokedexEdit}/>
            <Route path='Gallery' component={Pokedex}/>
            <Route path='Profile' component={UserProfile}/>
        </Route>
        <Redirect from='*' to='/'/>
    </Router>
)