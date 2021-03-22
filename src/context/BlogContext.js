import createDataContext from "./createDataContext";







const blogReducer = (state, action) => {

    switch (action.type) {
        case "add_blogpost":
            //we use math.random to randomly generate and id for every new blogpost
            return [...state, { id: Math.floor(Math.random() * 99999), title: action.payload.blogTitle, content: action.payload.blogContent }];

        case "delete_blogpost":
            //helper function filter goes through all of elements of state, and runs the given function
            //the function is taking blogpost as a param and returning true or false 
            //so in the result we are only returning those blog post that don't have the id we sent as payload
            return state.filter((blogPost) => blogPost.id != action.payload);

        default:
            return state;
    }

};






//after this function gets called we call dispatch that manages adding a new blogpost
const addBlogPost = dispatch => {

    return (title, content, callbackFunction) => {
        //this object will be read by react-native as a second argument in blogReducer function
        dispatch({ type: "add_blogpost", payload: { blogTitle: title, blogContent: content } });
        //after saving we call the function to go back to index screen
        callbackFunction();
    };
};








//after this function gets called we call dispatch function that will delete a new blogpost
const deleteBlogPost = dispatch => {

    //we are only running this function between components
    //thats why we need to pass in the objectId to this function as a parameter
    //then we can transfer it as a payload
    return (objectId) => {
        dispatch({ type: "delete_blogpost", payload: objectId });
    };
};









//after this function gets called we call dispatch function that will edit a current blogPost
const editBlogPost = dispatch => {

    //this inner function is exactly what is going to be called in our component
    //we are passing in an id of a blogPost we are editing
    //and new title and new content
    return (id, newTitle, newContent) => {
        dispatch({ type: "edit_blogpost", payload: { id: id, title: newTitle, content: newContent } });
    };
};





//deconstructuring the stuff our createDataContext function returns
//passing in the three parameters from this file to that function
export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost }, [{ id: 1, title: "Test Post", content: "My first content" }]);



