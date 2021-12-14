import yelp from "../InfoAPI/yelpAPI";
import { useEffect, useState } from "react";

export default () => {
  const [errorInfo, seterrorInfo] = useState("");
  const [resultInfo, resultDataSet] = useState([]);
  
  useEffect(() => {
    SearchWord("sweet");
  }, []);
  
  const SearchWord = async (word) => {
    try {
      const responseInfo = await yelp.get("/search", {
        params: {
          term: word,
          limit: 50,
          location: "new york",
        },
      });
      resultDataSet(responseInfo.data.businesses);
    } catch (err) {
      seterrorInfo("Issues");
    }
  };

  
  return [SearchWord, resultInfo, errorInfo];
};
