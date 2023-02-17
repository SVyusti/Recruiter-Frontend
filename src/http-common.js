import axios from "axios";
axios.defaults.xsrfCookieName='csrftoken';
axios.defaults.xsrfHeaderName='X-CSRFTOKEN';
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
export default axios.create({
    baseURL:"http://127.0.0.1:8000",
    headers:{
        "Content-type":"application/json"
    }
});
