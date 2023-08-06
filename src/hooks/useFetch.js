import { useEffect, useState } from "react";

function useFetch(URL){
  const [data, setDate]            = useState(null);
  const [isLoading, setIsloading]    = useState(true);
  const [isError, setisErrormessage] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((Response) => Response.json())
      .then((result) => {
        setIsloading(false);
        setDate(result);
      })
      .catch(error => {
        setIsloading(false);
        setisErrormessage("there was as error");
      });
  }, [URL]);

  return {data,isLoading,isError};
}

export default useFetch;