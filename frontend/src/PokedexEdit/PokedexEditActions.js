import axios from 'axios'
import { showTabs, selectTab } from "../common/tabs/tabActions";

const BASE_URL = 'http://localhost:3003/api'

export function getList(){
    const request = axios.get(`${BASE_URL}/pokemonGallery`)
    return{
        type: 'POKEMON_FETCHED',
        payload: request
    }
}

export function init(){
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList')
    ]
}