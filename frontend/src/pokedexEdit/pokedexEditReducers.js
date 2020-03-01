const INITIAL_STATE = { list: [], search: '', profile: {}, pokemonSelected: 2 }

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'POKEMON_FETCHED':
            return { ...state, list: action.payload.data }
        case 'CHANGE':
            return { ...state, search: action.payload }
        case 'PROFILE_SEARCHED':
            return { ...state, profile: action.payload.data == [] ? action.payload.data[0] : action.payload.data }
        default:
            return state
    }
}