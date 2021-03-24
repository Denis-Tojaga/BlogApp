import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";







const blogReducer = (state, action) => {

    switch (action.type) {

        //gets all blogPosts from JSON Server
        case "get_blogposts":
            return action.payload;


        case "add_blogpost":
            //we use math.random to randomly generate and id for every new blogpost
            return [...state, { id: Math.floor(Math.random() * 99999), title: action.payload.blogTitle, content: action.payload.blogContent }];

        case "delete_blogpost":
            //helper function filter goes through all of elements of state, and runs the given function
            //the function is taking blogpost as a param and returning true or false 
            //so in the result we are only returning those blog post that don't have the id we sent as payload
            return state.filter((blogPost) => blogPost.id != action.payload);


        case "edit_blogpost":

            //we use map to go through all the element of our state
            //this callback function gets called for every element in the array
            return state.map((blogPost) => {

                //this callback function is gonna accept every blogPost
                //it checks if the id's are the same
                //if they're the same we return the object from action.payload (with same id but different values)
                //if not we return the state we got

                return blogPost.id === action.payload.id ? action.payload : blogPost

            });


        default:
            return state;
    }

};







//ASYNC FUNCTION TO COMMUNICATE WITH JSON SERVER

const getBlogPosts = dispatch => {

    //because we are communicating with an api we need to make this function async/await
    //everything we sent as a request is going to be added to our baseURL in jsonServer file
    return async () => {

        try {
            //string must be the same as the object on the JSON server in order to work
            const response = await jsonServer.get("/blogposts");
            //this is where our blogposts will be
            //response.data === [ {}, {} , {} ]

            //now we call our dispatch function to fill our state with payload property
            dispatch({ type: "get_blogposts", payload: response.data })

        } catch (error) {
            console.log(error);
        }

    };
};























//after this function gets called we call dispatch that manages adding a new blogpost
const addBlogPost = dispatch => {

    return async (title, content, callbackFunction) => {

        // //this object will be read by react-native as a second argument in blogReducer function
        // dispatch({ type: "add_blogpost", payload: { blogTitle: title, blogContent: content } });
        // //after saving we call the function to go back to index screen
        // callbackFunction();


        //we mark this as an async function and givin two params
        //first one is where are we adding an object and second one is an object with all needed props
        await jsonServer.post("/blogposts", { title: title, content: content });

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
    return (id, newTitle, newContent, callBackFunction) => {
        dispatch({ type: "edit_blogpost", payload: { id: id, title: newTitle, content: newContent } });
        callBackFunction();
    };
};












//deconstructuring the stuff our createDataContext function returns
//passing in the three parameters from this file to that function
export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts }, []);



