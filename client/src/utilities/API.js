import axios from "axios";

export default {
  createTest: function(data) {
    return axios.post("/api/test", data);
  },
  loadItems: function() {
    return axios.get("/api/test");
  },
  getSpotify: function() {
    return axios.get("https://accounts.spotify.com/authorize?client_id=dbe2a20785304190b8e35d5d6644397b&response_type=code&redirect_uri=http://localhost:3000/callback&scope=user-read-private%20user-read-email&state=34fFs29kd09");
  }
}
