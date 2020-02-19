import { combineReducers } from 'redux'

import PokedexReducers from '../PokedexEdit/PokedexEditReducers'
import TabsReducers from '../common/tabs/tabReducer'

const rootReducer = combineReducers({
    pokedex: PokedexReducers,
    tabs: TabsReducers
})

export default rootReducer