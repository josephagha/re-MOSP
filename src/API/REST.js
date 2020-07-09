import { user } from "./Url";

//GET Request
export const isGoodApi = async url => {
  try {
    const data = await fetch(url, {
      headers: {
        Authorization: "Basic " + btoa(user)
      }
    });
    const items = await data.json();
    return items;
  } catch (error) {
    return error;
  }
};
