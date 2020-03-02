import { combineReducers } from 'redux'
import { reducer as formReducer} from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr' 

import PokedexReducers from '../pokedexEdit/pokedexEditReducers'
import TabsReducers from '../common/tabs/tabReducer'
import AuthReducers from '../auth/authReducers'

const rootReducer = combineReducers({
    pokedex: PokedexReducers,
    tabs: TabsReducers,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducers
})

export default rootReducer