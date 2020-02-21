import { combineReducers } from 'redux'
import { reducer as formReducer} from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr' 

import PokedexReducers from '../PokedexEdit/PokedexEditReducers'
import TabsReducers from '../common/tabs/tabReducer'
import PokeBattleReducer from '../pokeBattle/pokeBattleReducer'

const rootReducer = combineReducers({
    pokedex: PokedexReducers,
    tabs: TabsReducers,
    form: formReducer,
    toastr: toastrReducer,
    battle: PokeBattleReducer
})

export default rootReducer