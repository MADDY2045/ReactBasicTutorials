import React from 'react';
import { GoogleLogin,GoogleLogout } from 'react-google-login';
import moment from 'moment';
import Hooks from './components/HooksWay';

const clientId = '485008776010-mj3o94klbaj6kq2885u72lft8v999p7s.apps.googleusercontent.com';

const App = () => {

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

  const onLogOut = (res)=>{
    console.log(`Logged out successfully!! ${res}`);
  }
  return (
    <div>
      <h1>React Google Login</h1>
      <GoogleLogin
      clientId={clientId}
      buttonText="Login With Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}

      isSignedIn={true}
      />
      <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onLogOut}
      />
      <div  style={{marginTop:'200px'}}>
      <GoogleLogin
      clientId={clientId}
      render={ renderProps=>(
        <button className="btn btn-outline-primary" disabled={ renderProps.disabled } onClick={renderProps.onClick}> Google Sign In  </button>
      )}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}

      />
      </div>
        <Hooks />
    </div>
  );
}

export default App;
