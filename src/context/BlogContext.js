import React from "react";
//React's library has a function createContext that helps us to create this new object
//that is going to handle all CRUD operations 

import createDataContext from "./createDataContext";


const reducerFunction = (state, action) => {

    switch (action.type) {
        case "add_blogpost":
            return [...state, { title: `Blog post #${state.length + 1}` }];
        default:
            return state;
    }

};





const addBlogPost = (runReducer) => {
    return () => {
        runReducer({ type: "add_blogpost" });
    };
};




//we export what the function is returning
//3 arguments we need to pass to that function
//first one is reducerFunction(where logic happens)
//second one is the callBack function which will do operation
//third one is the initial state value
export const { Context, Provider } = createDataContext(reducerFunction, { addBlogPost }, []);


