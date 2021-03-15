import React, { useReducer } from "react";



//creation of context object from React library
const BlogContext = React.createContext();




const blogReducer = (state, action) => {

    switch (action.type) {
        case "add_blogpost":
            return [...state, { title: `Blog Post #${state.length + 1}` }];

        default:
            return state;
    }

};




export const BlogProvider = ({ children }) => {


    const [blogPosts, dispatch] = useReducer(blogReducer, []);




    //callback function
    // const addBlogPost = () => {

    //     //copy everything from the old array and place it in new one
    //     //after that add the new object with title prop
    //     setBlogPosts([...blogPosts, { title: `Blog post${blogPosts.length + 1}` }]);
    // };




    //after this function gets called we call dispatch that manages adding a new blogpost
    const addBlogPost = () => {
        dispatch({ type: "add_blogpost" });
    };








    return (
        <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
            {children}
        </BlogContext.Provider>
    );

};



export default BlogContext;








