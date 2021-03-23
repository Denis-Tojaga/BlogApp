import axios from "axios";


//we are exporting axios function to create axios object
//main thing we care about is baseURL prop

export default axios.create({
    //this is the baseURL to our server
    //we have to change this every couple of hours in order to work
    //because ngrok lasts only for that time
    baseURL: "http://ff858d762604.ngrok.io"

});