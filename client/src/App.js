import React, {useState, useEffect} from 'react';

const App = () => {
  const [categoryCount, setCategoryCount] = useState();
  const [productCount, setProductCount] = useState();
  useEffect(() => {
    fetch('/api/categories')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => setCategoryCount(data.length))
      .catch(error => console.log(error));

    fetch('/api/products')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => setProductCount(data.length))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div>Hello world!</div>
      {categoryCount && productCount ? (
        <div>
          We have {categoryCount} categories and {productCount} products in our
          database
        </div>
      ) : (
        <div>Fetching data ....</div>
      )}
    </>
  );
};

export default App;
