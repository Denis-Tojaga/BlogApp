import React, { useState } from "react";



const BlogContext = React.createContext();




export const BlogProvider = ({ children }) => {

    const [blogPosts, setBlogPosts] = useState([]);




    //callback function
    const addBlogPost = () => {

        //copy everything from the old array and place it in new one
        //after that add the new object with title prop
        setBlogPosts([...blogPosts, { title: `Blog post${blogPosts.length + 1}` }]);


    };




    return (
        <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
            {children}
        </BlogContext.Provider>
    );

};



export default BlogContext;








