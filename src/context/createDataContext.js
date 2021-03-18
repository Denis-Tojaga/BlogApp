import React, { useReducer } from "react";



//first argument would be our reducer Function
//second argument will be some helper function that calls dispatch,actions functions describe how we are changing out objects
//third arugment will be some initial state

export default (reducer, actions, initialState) => {


    //first we create context object
    const Context = React.createContext();





    //second thing will be provider function, same as BlogProvider we made 
    //Provider is an object that makes our data available everywhere inside out application
    const Provider = ({ children }) => {

        
        const [state, dispatch] = useReducer(reducer, initialState);



        //actions === {addBlogPost: (dispatch) =>{ return () =>{ } }}
        const boundActions = {};

        for (let key in actions) {
            //key === "addBlogPost"
            boundActions[key] = actions[key](dispatch);
        }






        return <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>
    };





    //we made a reusable function that we can call for different states
    //and for setting up this context and provider stuff
    return { Context, Provider };
};