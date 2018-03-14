import axios from "axios";

export default {
  // list all errands
  createTest: function(data) {
    return axios.post("/api/test", data);
  },
  loadItems: function(data) {
    return axios.get("/api/test");
  }
}
