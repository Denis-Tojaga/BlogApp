import React, { useReducer } from "react";



//we are creating a helper file in order to maintain the data manipulation
//first argument is reducerFunction 
//second argument is actions object which will have all those helper functions that we need
//third argument is the initial state of an object

export default (reducerFunction, actions, initialState) => {

    //this object will "move" information from the root to some nested child 
    const Context = React.createContext();


    //reason why are we using the children prop is because everytime our component get rendered
    //it passes all wrapped elements as a prop of children to our custom component
    //with this we are able to send custom components as an arguments



    //we don't use export default here, only export because 
    //eventually we're gonna export BlogContext component, and that thing we are going to export as our default from this file



    //when we create an object with createContext(), it gets the property Provider
    //reason why are we using the .Provider because it will accept some information and make it available to all of our other components
    const Provider = ({ children }) => {

        const [state, runReducer] = useReducer(reducerFunction, initialState);

        //we are setting a value to an object that is having a property which is our current state
        return <Context.Provider value={{ state: state }}>
            {children}
        </Context.Provider>
    };


    return { Context, Provider };
};