import axios from "axios";
import { cleanQueryparam } from "./functions";
import { baseURL, placeHolder } from "./settings";

export const invokeExternalAPI = async (
  endpoint,
  method,
  body,
  header,
  query
) => {
  const options = {
    method: method,
    url: baseURL + endpoint,
    headers: header,
    params: query,
    data: body,
  };

  cleanQueryparam(options.params);

  if (method === "get") {
    delete options.body;
  }
  console.log(options);
  let data = null;
  let error = null;

  try {
    const res = await axios(options);
    data = res.data;
    // const res = fetch(u)
  } catch (e) {
    if (e?.response?.statusText !== "") {
      error = e?.response?.statusText;
    }
    error = e.message;
  }

  return { data, error };
};



export const invokeAPI = async (
  endpoint,
  method,
  body,
  header,
  query
) => {
  const options = {
    method: method,
    url: baseURL + endpoint,
    data: body,
    headers: header,
    params: query,
   
  };

  cleanQueryparam(options.params);

  if (method === "get") {
    delete options.body;
  }

  let data = null;
  let error = null;
console.log(options);
  try {
    const res = await axios(options);
    data = res.data;
    // const res = fetch(u)
  } catch (e) {
    if (e?.response?.statusText !== "") {
      error = e?.response?.statusText;
    }
    error = e.message;
  }

  return data
};
