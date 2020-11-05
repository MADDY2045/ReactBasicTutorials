import React from 'react';
import { useGoogleLogin,useGoogleLogout } from 'react-google-login';
import axios from 'axios';

const clientId = '485008776010-mj3o94klbaj6kq2885u72lft8v999p7s.apps.googleusercontent.com';

const HooksWay = () => {

    const onSuccess = async (res)=>{
        var reloadResponse = await res.reloadAuthResponse();
        let refreshTiming = (res.tokenObj.expires_in || 3600-5 *60) * 1000;
        const refreshToken= async()=>{
          const newAuthRes = await res.reloadAuthResponse();
          refreshTiming = (newAuthRes.expires_in || 3600-5 * 60) * 1000;
          console.log(`newAuthRes: ${JSON.stringify(newAuthRes,null,2)}`);
          setTimeout(refreshToken,refreshTiming);
        }
        setTimeout(refreshToken,refreshTiming);
        axios.post('http://localhost:7001/handleuser',{data:reloadResponse.id_token})
        .then(response=>{
            console.log(response.data);
        })
        .catch(err=>console.log(`error in handling token id ${err}`))
      }

      const onFailure = (res)=>{
        console.log(`Login failed!! ${res}`);
      }

      const onLogoutSuccess = ()=>{
        console.log(`Logged out successfully!! `);
      }

      const { signIn } = useGoogleLogin({
          onSuccess,
          onFailure,
          clientId,
          isSignedIn:true,
          accessType:'offline'
      })


      const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure
       })

    return (
        <div>
            <h1>Hooks</h1>
            <button onClick={ signIn } className="btn btn-info">Sign in with Google</button>
            <button onClick={ signOut } className="btn btn-warning">Sign Out</button>
        </div>
    );
}

export default HooksWay;
