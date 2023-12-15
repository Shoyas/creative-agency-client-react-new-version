import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [loading, setLoading] = useState(true);

  return (  
    <div>
      <AuthContext.Provider
        value={[loggedInUser, setLoggedInUser, loading, setLoading]}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProviders;
