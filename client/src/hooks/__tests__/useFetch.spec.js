import {getUrl} from '../useFetch';

describe('getUrl', () => {
  const url = 'google.com';
  it.each`
    queryObj        | expected
    ${undefined}    | ${'google.com'}
    ${{x: 1, y: 2}} | ${'google.com?x=1&y=2'}
  `('works', ({queryObj, expected}) => {
    expect(getUrl(url, queryObj)).toEqual(expected);
  });
});
