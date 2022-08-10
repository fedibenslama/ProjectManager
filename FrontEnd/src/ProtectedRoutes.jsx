import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';





const useAuth = () => { 
  const [isAuth, setIsAuth] = useState(null);
  
  
  

  useEffect(() => {
    const token = window.sessionStorage.getItem('token');
    if (token) {
      fetch('http://localhost:3001/signin', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data && data.id) {
            fetch(`http://localhost:3001/profile/${data.id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': token
              }
            })
            .then(response => response.json())
            .then(user => {
              if (user && user.email) {
                console.log(user)
                setIsAuth(true)
              }
            })
            .catch((err)=>{
              setIsAuth(false)
            })
          }
        
        })

    }
    else{
      setIsAuth(false)
    }
  },[])    
  
  return isAuth;
};


const ProtectedRoutes = () => {
  const isAuth = useAuth();
 

  if (isAuth === null) 
   return null

   
    
  

    return isAuth ? <Outlet /> : <Navigate to="/login" />;

   
  
   };


export default ProtectedRoutes;