import axios from "axios";

const api = "http://localhost:5148/api/";

export const getModules = async () => {
  return await axios({
    method: "get",
    url: api + "Module",
    headers: { "Content-Type": "application/json" },
  }).then(function (response) {
    console.log(response)
    return response;
  });
};
