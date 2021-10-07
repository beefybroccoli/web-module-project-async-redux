import axios from "axios";

export const cb_cnbc_API_call = () => {
  var options = {
    method: "GET",
    url: "https://cnbc.p.rapidapi.com/get-meta-data",
    headers: {
      "x-rapidapi-host": "cnbc.p.rapidapi.com",
      "x-rapidapi-key": "3f947818ddmshec2277723dbe988p1a226fjsndad21b80b2fb",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
