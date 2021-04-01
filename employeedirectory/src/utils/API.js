import axios from "axios";

const BASEURL = "https://randomuser.me/?q=";
const APIKEY = "&api_key=d16ad09ee7b645660c202ca363ac444f&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};