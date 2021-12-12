import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ReactLoading from 'react-loading';
//import { Link } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) return <ReactLoading type='cylon' color='#abc123' height={599} width={200} />; //verificar el reaclogin para css

  

  return <>{children}</>;
}

 /*return isAuthenticated ? ( 
  <>{children}</>
  ) : (
    <div>
      <div className='noAut'>No estas autorizado para ver este sitio.</div>
      <Link to= 'http://localhost:3000'>
        <span className='goHome'>Llévame al home</span>
      </Link>
    </div>
  );
};*/

export default PrivateRoute;


//Este PrivateRoute se usa en el PrivataLayout.jsx

