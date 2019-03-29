import {useState} from 'react';

const makeQuery = obj =>
  Object.keys(obj)
    .map(key => `${key}=${obj[key]}`)
    .join('&');

const getUrl = (url, queryObj) =>
  queryObj ? `${url}?${makeQuery(queryObj)}` : url;

const useFetch = ({
  url = '',
  method = 'GET',
  dataObj,
  queryObj,
  successCb = () => {},
  failCb = () => {},
}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  const triggerFetch = () => {
    setLoading(true);
    fetch(getUrl(url, queryObj), {
      method,
      ...(dataObj
        ? {
            body: JSON.stringify(dataObj),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        : {}),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        setData(data);
        successCb(data);
      })
      .then(error => {
        setError(error);
        failCb(error);
      })
      .finally(() => setLoading(false));
  };

  return {loading, data, error, triggerFetch};
};

export {getUrl};

export default useFetch;