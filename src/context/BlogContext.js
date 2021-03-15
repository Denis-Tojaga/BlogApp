import createDataContext from "./createDataContext";







const blogReducer = (state, action) => {

    switch (action.type) {
        case "add_blogpost":
            return [...state, { title: `Blog Post #${state.length + 1}` }];

        default:
            return state;
    }

};






//after this function gets called we call dispatch that manages adding a new blogpost
const addBlogPost = dispatch => {

    return () => {
        dispatch({ type: "add_blogpost" });
    };

};







//deconstructuring the stuff our createDataContext function returns
//passing in the three parameters from this file to that function
export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, []);



