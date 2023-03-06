import axios from "axios";
axios.defaults.xsrfCookieName='csrftoken';
axios.defaults.xsrfHeaderName='X-CSRFTOKEN';
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

const client=axios.create({
    baseURL:"http://127.0.0.1:8000/",
    withCredentials:true
});

export default client;