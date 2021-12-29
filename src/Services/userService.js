import axios from "axios";

let getUserInfo = () => {
  const config = {
    method: "GET",
    url: "https://randomuser.me/api/?results=10",
    withCredentials: false,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
    
  };
  return axios(config);
};


export { getUserInfo };
