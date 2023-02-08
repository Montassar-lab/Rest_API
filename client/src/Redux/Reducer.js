import { GETONEUSER, GETUSERS } from "./Actiontype"


const initialState={
    contacts:[],
    oneContact : {}
}

const Reducer=(state = initialState, action)=>{
    switch (action.type) {
        case GETONEUSER : return {...state, oneContact: action.payload}
        case GETUSERS : return {...state,contacts : action.payload}
        default: return state
           
    }
}

export default Reducer