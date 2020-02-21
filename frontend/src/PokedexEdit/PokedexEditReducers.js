const INITIAL_STATE = { list: [], search: '' }

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'POKEMON_FETCHED':
            return { ...state, list: action.payload.data }
        case 'CHANGE':
            return { ...state, search: action.payload }
        default:
            return state
    }
}