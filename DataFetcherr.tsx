import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    axios.get('http://localhost:5000')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Fetched Data:</h1>
      <p>{data}</p>
    </div>
  );
};

export default DataFetcher;
