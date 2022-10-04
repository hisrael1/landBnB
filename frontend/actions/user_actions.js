import { fetchUser } from "../util/user_api_util";
import { receiveCurrentUser } from "./session_actions";

export const getUser = (userId) => dispatch => (
    fetchUser(userId).then(
        user => dispatch(receiveCurrentUser(user))
    )
)
