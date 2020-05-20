import { propOr } from "ramda";

import { useCallback, useEffect, useReducer } from "react";

import { getMockDataByUrl } from "../mocks";

const initialState = {
  loading: false,
};

const FETCH_START = "FETCH_START";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILED = "FETCH_FAILED";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_START:
      return { loading: true };
    case FETCH_SUCCESS:
      return { loading: false, data: action.payload };
    case FETCH_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useFetcher = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { loading, data, error } = state;

  const triggerFetch = useCallback((url, opts = {}) => {
    if (!url) return Promise.resolve();

    const fetchPromise = opts.mock
      ? Promise.resolve(getMockDataByUrl(url))
      : fetch(url, opts).then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            const error = new Error("API returns errors.");
            error.status = response.status;
            throw error;
          }
        });

    dispatch({ type: FETCH_START });
    return fetchPromise
      .then((data) => {
        dispatch({
          type: FETCH_SUCCESS,
          payload: propOr(data, "data")(data),
        });
      })
      .catch((error) => {
        dispatch({ type: FETCH_FAILED, payload: error });
        return error;
      });
  }, []);

  return [triggerFetch, { loading, data, error }];
};

export const useFetch = (url, opts) => {
  const [fetcher, result] = useFetcher();

  const triggerFetch = useCallback(() => {
    return fetcher(url, opts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetcher, url, JSON.stringify(opts)]);

  return [triggerFetch, result];
};

export const useFetchOnMount = (url, opts) => {
  const [triggerFetch, result] = useFetch(url, opts);

  useEffect(() => {
    triggerFetch();
  }, [triggerFetch]);

  return result;
};
