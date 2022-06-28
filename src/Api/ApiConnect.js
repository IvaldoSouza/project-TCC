// import { useState, useEffect } from "react";
// import axios from 'axios';


// const useAxiosPost = (url, payload) => {
//   const [data, setData] = useState(null);
//   const [err, setError] = useState("");
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     axios
//       .get(url, payload)
//       .then((response) => setData(response.data))
//       .catch((err) => setError(err.message))
//       .finally(() => setLoaded(true));
//   }, []);

//   return { data, err, loaded };
// };

// export default useAxiosPost;


import axios from 'axios';

const apiConnect = axios.create({
  baseURL: 'http://localhost:8080'
});

export default apiConnect;