import axios from "axios";

export default {
  // Gets all books
  getSites: function() {
    return axios.get("/api/sites");
  },
  // Deletes the book with the given id
  deleteSite: function(id) {
    return axios.delete("/sites/" + id);
  },
  // Saves a book to the database
  saveSite: function(siteData) {
    return axios.post("/sites", siteData);
  }
};