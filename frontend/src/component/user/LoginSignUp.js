import React, { useEffect, useRef, useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { clearErrors, register, login } from '../../actions/userAction.js';
import { useDispatch, useSelector } from 'react-redux';

const LoginSignUp = () => {
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);
  const dispatch = useDispatch();

  const switchTabs = (e, tab) => {
    if (tab === 'login') {
      switcherTab.current.classList.add('shiftToNeutral');
      switcherTab.current.classList.remove('shiftToRight');

      registerTab.current.classList.remove('shiftToNeutralForm');
      loginTab.current.classList.remove('shiftToLeft');
    }
    if (tab === 'register') {
      switcherTab.current.classList.add('shiftToRight');
      switcherTab.current.classList.remove('shiftToNeutral');

      registerTab.current.classList.add('shiftToNeutralForm');
      loginTab.current.classList.add('shiftToLeft');
    }
  };

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState('/profile.png');
  const [avatarPreview, setAvatarPreview] = useState('');

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set('name', name);
    myForm.set('email', email);
    myForm.set('password', password);
    myForm.set('avatar', avatar);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  // Uncomment this useEffect when you need to clear errors
  // useEffect(() => {
  //     dispatch(clearErrors());
  // }, [dispatch]);

  return (
    <>
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <div>
            <div className="login_signUp_toggle">
              <p onClick={(e) => switchTabs(e, 'login')}>LOGIN</p>
              <p onClick={(e) => switchTabs(e, 'register')}>Register</p>
            </div>
            <button ref={switcherTab}></button>
          </div>
          <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
            <div className="loginEmail">
              <EmailIcon />
              <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                required
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="loginPassword">
              <LockIcon />
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <Link to="/password/forgot">Forget Password ?</Link>
            <input type="submit" value="Login" className="loginBtn" />
          </form>
          <form
            className="signUpForm"
            ref={registerTab}
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <div className="signUpName">
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                value={name}
                onChange={registerDataChange}
              />
            </div>
            <div className="signUpEmail">
              <EmailIcon />
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={registerDataChange}
              />
            </div>
            <div className="signUpPassword">
              <LockIcon />
              <input
                type="password"
                placeholder="Password"
               required
                name="password"
                value={password}
                onChange={registerDataChange}
              />
            </div>
            <div id="registeImage">
              <img src={avatarPreview} alt="avatar" />
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={registerDataChange}
              />
            </div>
            <input type="submit" value="Register" className="signUpBtn" />
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginSignUp;
