export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = clickedId => {
    return {
        type: ADD_FEATURE,
        payload: clickedId
    }
}

export const removeFeature = clickedId => {
    return {
        type: REMOVE_FEATURE,
        payload: clickedId
    }
}