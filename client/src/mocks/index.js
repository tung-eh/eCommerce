import allData from './data';

const getMockDataByUrl = url => {
  const findResult = allData.find(mock => mock.url === url);
  return findResult ? findResult.data : `Coudn't find mock data by url ${url}`;
};

export {getMockDataByUrl};
