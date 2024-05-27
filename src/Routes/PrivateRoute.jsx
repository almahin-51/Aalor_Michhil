import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.config";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const [user, loading] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
    
    return children;
};

export default PrivateRoute;