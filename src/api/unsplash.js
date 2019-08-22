import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 5698d459ed7883b73f1bbe8b4fd12407b2215a27c174f3f5bc5668caa5bca9ff"
  }
});
