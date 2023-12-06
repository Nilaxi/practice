import axios from "axios";

let n =JSON.parse(localStorage.getItem("token"));
const fetchauth = axios.create({
    baseURL : "https://real-pear-fly-kilt.cyclic.app/",
    headers :{
        'Authorization' : `bearer ${n?.jwtToken}`,
        'Content-Type' : 'application/json',

    }
})
export default fetchauth;