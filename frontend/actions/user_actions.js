import { fetchUser } from "../util/user_api_util";
import { fetchUsers } from "../util/user_api_util";

export const receiveUser = user => ({
    type: "RECEIVE_USER",
    user
})

export const getUser = (userId) => dispatch => (
    fetchUser(userId).then(
        user => dispatch(receiveUser(user))
    )
)

export const receiveUsers = users => ({
    type: "RECEIVE_USERS",
    users
})

export const getUsers = () => dispatch => (
    fetchUsers().then(
        users => dispatch(receiveUsers(users))
    )
)


