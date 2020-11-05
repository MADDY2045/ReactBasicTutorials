import React from 'react';
import { useGoogleLogin,useGoogleLogout } from 'react-google-login';
import moment from 'moment';

const clientId = '485008776010-mj3o94klbaj6kq2885u72lft8v999p7s.apps.googleusercontent.com';

const HooksWay = () => {

    const onSuccess = async (res)=>{
        console.log(`Login Successful!! CurrentUser:${JSON.stringify(res.profileObj,null,2)}`);
        var reloadResponse = await res.reloadAuthResponse();
        console.log(`reload response is ${JSON.stringify(reloadResponse,null,2)}`);
        var expirytime = await reloadResponse.expires_at ;
        var momenttime = moment.utc(expirytime).add(4.5, 'hours').format('dddd, MMMM Do, YYYY h:mm:ss A');
        console.log(`momenttime is ${momenttime}`);
        let today =  Date.now();
        console.log(`today is ${moment(today).format('dddd, MMMM Do, YYYY h:mm:ss A')}`)
        let refreshTiming = (res.tokenObj.expires_in || 3600-5 *60) * 1000;
        const refreshToken= async()=>{
          const newAuthRes = await res.reloadAuthResponse();
          refreshTiming = (newAuthRes.expires_in || 3600-5 * 60) * 1000;
          console.log(`newAuthRes: ${JSON.stringify(newAuthRes,null,2)}`);
          setTimeout(refreshToken,refreshTiming);
        }
        setTimeout(refreshToken,refreshTiming);
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
