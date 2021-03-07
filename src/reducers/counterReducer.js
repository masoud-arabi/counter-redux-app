import {ACTION_TYPES} from '../actions/counterAction';


function counterReducer(state={counter: 1}, action){
    if (action.type === ACTION_TYPES.CHANGE_COUNTER){
        return{
            ...state,
            counter: state.counter + action.payload,
        }
    }
    return state;
}

export default counterReducer;