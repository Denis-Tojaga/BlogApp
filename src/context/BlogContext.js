import React from "react";
//React's library has a function createContext that helps us to create this new object
//that is going to handle all CRUD operations 



//this object will "move" information from the root to some nested child 
const BlogContext = React.createContext();



//reason why are we using the children prop is because everytime our component get rendered
//it passes all wrapped elements as a prop of children to our custom component
//with this we are able to send custom components as an arguments


//we don't use export default here, only export because 
//eventually we're gonna export BlogContext component, and that thing we are going to export as our default from this file
export const BlogProvider = ({ children }) => {

    return <BlogContext.Provider>

        {children}

    </BlogContext.Provider>

};



