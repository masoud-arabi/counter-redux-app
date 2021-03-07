
export const ACTION_TYPES = {
    CHANGE_COUNTER: 'CHANGE_COUNTER',
};


export function changeCounter(value){
    return {
        type:  ACTION_TYPES.CHANGE_COUNTER,
        payload: value,
    };
}