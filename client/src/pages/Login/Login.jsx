import logo from '../../assets/image/logo.png';
import icon from '../../assets/image/icon.png';
import microsoftImg from '../../assets/image/microsoft.png';
import playStoreImg from '../../assets/image/google_playStore.png';
import ss1 from '../../assets/image/screenshot1.png';
import ss2 from '../../assets/image/screenshot2.png';
import ss3 from '../../assets/image/screenshot3.png';
import ss4 from '../../assets/image/screenshot4.png';
import Slider from 'react-slick';
import './Login.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginFormAction } from '../../features/Instagram/InstaApi.jsx';

const Login = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  // Input State Manage
  const handleInputChange = (e) => {
    setInput((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  // Handle Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(LoginFormAction(input));
  };

  // Image Slider Setting
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
  };

  return (
    <>
      <div className='login-wrapper'>
        <div className='container'>
          <div className='row'>
            {/* ------ Start of Left Side ------- */}
            <div className='col-md-6 left'>
              <div className='banner'>
                <Slider {...settings}>
                  <div className='mb-img'>
                    <img src={ss1} alt='' />
                  </div>
                  <div className='mb-img'>
                    <img src={ss2} alt='' />
                  </div>
                  <div className='mb-img'>
                    <img src={ss3} alt='' />
                  </div>
                  <div className='mb-img'>
                    <img src={ss4} alt='' />
                  </div>
                </Slider>
              </div>
            </div>
            {/* ------ End of Left Side ------- */}

            {/* ------ Start of Right Side ------- */}
            <div className='col-md-6 right'>
              {/* ------ Start of Login content ------- */}
              <div className='wrapper'>
                <div className='img-wrap'>
                  <img src={logo} alt='' />
                </div>
                <form onSubmit={handleFormSubmit}>
                  <input
                    name='email'
                    value={input.email}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Phone number, username, or email'
                  />
                  <input
                    name='password'
                    value={input.password}
                    onChange={handleInputChange}
                    type='password'
                    placeholder='Password'
                  />
                  <button type='submit'>Log in</button>

                  <div className='or'>
                    <p>OR</p>
                  </div>

                  <a className='sign-btn' href='#'>
                    <div className='fb-icon'>
                      <img src={icon} alt='' />
                    </div>
                    <p>Log in with Facebook</p>
                  </a>
                  <a className='forget-pass' href='#'>
                    Forgot password?
                  </a>
                </form>
              </div>

              {/* ------ Start of Sign up content ------- */}
              <div className='wrapper1'>
                <p className='isAccount'>{`Don't have and account?`}</p>
                <Link className='sign-btn' to='/register'>
                  Sign up
                </Link>
              </div>

              {/* ------ Start of Right Footer Content ------- */}
              <p className='right-footer'>Get the app</p>
              <div className='img-area'>
                <img src={playStoreImg} alt='' />
                <img src={microsoftImg} alt='' />
              </div>
            </div>
            {/* ------ End of Right Side ------- */}

            {/* ------ Start of Footer Menu ------- */}
            <div className='col-md-12 footer'>
              <ul>
                <li>
                  <a href='#'>Meta</a>
                </li>
                <li>
                  <a href='#'>About</a>
                </li>
                <li>
                  <a href='#'>Blog</a>
                </li>
                <li>
                  <a href='#'>Jobs</a>
                </li>
                <li>
                  <a href='#'>Help</a>
                </li>
                <li>
                  <a href='#'>Api</a>
                </li>
                <li>
                  <a href='#'>Privacy</a>
                </li>
                <li>
                  <a href='#'>Terms</a>
                </li>
                <li>
                  <a href='#'>Top Accounts</a>
                </li>
                <li>
                  <a href='#'>Locations</a>
                </li>
                <li>
                  <a href='#'>Instagram Lite</a>
                </li>
                <li>
                  <a href='#'>Contact Uploading & Non-User</a>
                </li>
                <li>
                  <a href='#'>Meta Verified</a>
                </li>
              </ul>
              <div className='footer-main'>
                <select name='language' id=''>
                  <option value=''>English</option>
                  <option value=''>Bangla</option>
                </select>
                <p>&copy; 2023 Instagram from Meta</p>
              </div>
            </div>
            {/* ------ End of Footer Menu ------- */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
