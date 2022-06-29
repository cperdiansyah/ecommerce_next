import axios from 'axios';

const getAccessToken = () => {
  
}

const fetch = async (url, options) => {
  const { data } = await axios.get(url, options);
  return data;
};
const post = async (url, options) => {
  const { data } = await axios.post(url, options);
  return data;
};

export { fetch };
