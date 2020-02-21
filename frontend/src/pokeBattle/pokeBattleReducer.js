const INITIAL_STATE = { player: {}, enemy: {}}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DEFINE_PLAYER':
            return { ...state, player: action.payload }
        case 'DEFINE_ENEMY':
            return { ...state, enemy: action.payload }
        default:
            return state
    }
}