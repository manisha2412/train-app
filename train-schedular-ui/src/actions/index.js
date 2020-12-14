import {ADD_REMINDER} from '../constants';

export const addReminder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text: text
    }
    console.log("action", text);
    return action;
}

export const addTrain = (text) => {
    const action = {
        type: ADD_REMINDER,
        text: text
    }
    console.log("action", text);
    return action;
}