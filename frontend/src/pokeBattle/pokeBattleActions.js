export function definePlayerAndEnemy(player, enemy){
    return[{
        type: 'DEFINE_PLAYER',
        payload: player
    },{
        type: 'DEFINE_ENEMY',
        payload: enemy
    }]
}