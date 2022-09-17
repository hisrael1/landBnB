import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import configureStore from './store/store';
// testing
import { fetchListings } from "./util/listing_api_util";
import { indexListings } from "./actions/listing_actions";
import { receiveListings } from "./actions/listing_actions";
import { logout } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
            users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // for testing purposes
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchListings = fetchListings;
    window.receiveListings = receiveListings;
    window.indexListings = indexListings;
    window.logout = logout;
    
    // window.login = login;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});
