import axios from "axios";

let n = JSON.parse(localStorage.getItem("token"));

const authfetch = axios.create({
    baseURL : "https://real-pear-fly-kilt.cyclic.app/"
})
authfetch.interceptors.request.use((request)=>{
     request.headers['Authorization'] = `bearer ${n?.jwtToken}`
     request.headers["Content-Type"] =`Application/json`
    console.log(request);
    console.log(n);
     return request;
},(errow)=>{
    return Promise.reject(errow);
})
authfetch.interceptors.response.use((response)=>{
        return response;
},(error)=>{

    console.log(error); 
    return Promise.reject(error);   
})
export default authfetch;