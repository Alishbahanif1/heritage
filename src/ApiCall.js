import { useEffect, useState } from 'react';
import axios from 'axios';

function ApiCall(url, isTrue) {

  const [data, setData] = useState([]);

isTrue=true

  useEffect(() => {
    if (isTrue) {

      console.log('Callled')
      axios.get(url)
        .then((response) => {
          setData(response.data)
        })
        .catch((error) => console.error(error));
    }
  }, [url]);
  return data

}

export default ApiCall;