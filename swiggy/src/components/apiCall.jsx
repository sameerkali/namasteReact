/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";

// Swiggy API to get Restaurant data with corsproxy
export const swiggy_api_URL =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";

const apiCall = () => {
  useEffect(() => {
    ApiCall();
  }, []);

   const ApiCall = async() => {
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();

    console.log(json);
  }

  return (
    <div>
      <h1>API Call page </h1>
    </div>
  );
};

export default apiCall;
