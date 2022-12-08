import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { receiveUsers } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case "RECEIVE_USER":
            return Object.assign({}, state, { [action.user.id]: action.user });
        case "RECEIVE_USERS":
            let nextState = Object.assign({}, state); 
            action.users.forEach(user => {
                nextState[user.id] = user;
            })
            return nextState;
        default:
            return state;
    }
}

export default usersReducer;
