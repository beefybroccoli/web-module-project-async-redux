import axios from "axios";
import { NASA_API_URL } from "../constant/constant";
import { nasaData_apod } from "../data/nasaData";
import { specialEntries } from "../data/cnbcData";

export const cb_cnbc_API_call_metaData = () => {
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

export const cb_cnbc_API_call_listTrending = () => {
  var options = {
    method: "GET",
    url: "https://cnbc.p.rapidapi.com/news/v2/list-trending",
    params: { tag: "Articles", count: "30" },
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

export const cb_cnbc_API_call_listSpecialReport = () => {
  var options = {
    method: "GET",
    url: "https://cnbc.p.rapidapi.com/news/v2/list-special-reports",
    params: { pageSize: "30", page: "1" },
    headers: {
      "x-rapidapi-host": "cnbc.p.rapidapi.com",
      "x-rapidapi-key": "3f947818ddmshec2277723dbe988p1a226fjsndad21b80b2fb",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.data.specialReportsEntries.results);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const mock_cnbc_API_call_listSpecialReport = () => {
  return specialEntries;
};

export const cb_nasa_apod_API_call = () => {
  axios
    .get(NASA_API_URL)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const mock_nasa_apod_API_call = () => {
  return nasaData_apod;
};
