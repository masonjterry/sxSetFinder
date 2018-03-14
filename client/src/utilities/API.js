import axios from "axios";

export default {
  // list all errands
  createTest: function(data) {
    return axios.post("/api/test", data);
  },
  loadItems: function() {
    return axios.get("/api/test");
  },
  // getSpotify: function() {
  //   return axios.get(`https://accounts.spotify.com/authorize?client_id=dbe2a20785304190b8e35d5d6644397b&client_secret=d73cf4a1525c44e899feeeff4b840040&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5555%2Fredirect&scope=user-top-read&state=34fFs29kd09`, {headers : {'Authorization' : 'Bearer'}});
  // }
}
