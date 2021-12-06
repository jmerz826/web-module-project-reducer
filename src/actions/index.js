export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const MEM_ADD = 'MEM_ADD';
export const MEM_R = 'MEM_R';

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator})
}

export const clearDisplay = () => {
    return ({ type: CLEAR_DISPLAY });
}

export const memAdd = (val) => {
    return({type: MEM_ADD, payload:val});
}

export const memR = (memVal) => {
    return({type: MEM_R, payload:memVal});
}