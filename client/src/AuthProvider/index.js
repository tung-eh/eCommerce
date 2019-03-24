import React, {useState, useEffect} from 'react';

const AuthContext = React.createContext({
  authInfo: null,
  updateAuthInfo: () => {},
});

const AuthProvider = ({children}) => {
  const [authInfo, updateAuthInfo] = useState(null);
  useEffect(() => {
    fetch('/api/auth')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => updateAuthInfo(data))
      .catch(error => updateAuthInfo(null));
  }, []);

  return (
    <AuthContext.Provider value={{authInfo, updateAuthInfo}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext};

export default AuthProvider;
