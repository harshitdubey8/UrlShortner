import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://url-shortner-v.herokuapp.com/api",
});

export default instance;
