import logo from '../../assets/image/logo.png';
import icon from '../../assets/image/icon.png';
import microsoftImg from '../../assets/image/microsoft.png';
import playStoreImg from '../../assets/image/google_playStore.png';
import { Link } from 'react-router-dom';
import './Register.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../features/Instagram/InstaApi.jsx';

const Register = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  // Handle Input change
  const handleInputChange = (e) => {
    setInput((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  // Handle Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(register(input));
  };

  // useEffect(() => {
  // if (logUser) {
  //   navigate('/');
  // }
  // }, []);

  return (
    <>
      <div className='wrapper'>
        <div className='container'>
          <div className='row'>
            {/* ------ Start of Left Side ------- */}
            <div className='col-md-12'>
              <div className='top-wrapper'>
                <div className='banner'>
                  <img src={logo} alt='' />
                </div>
                <p>Sign up to see photos and videos from your friends.</p>
                <button>
                  <div className='fb-logo-wrap'>
                    <img src={icon} alt='' />
                  </div>
                  <p>Log in with Facebook</p>
                </button>
                <div className='or-wrap'>
                  <p>OR</p>
                </div>
                <form action='' onSubmit={handleFormSubmit}>
                  <input
                    name='email'
                    value={input.email}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Mobile Number or Email'
                  />
                  <input
                    name='name'
                    value={input.name}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Full Name'
                  />
                  <input
                    name='username'
                    value={input.username}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Username'
                  />
                  <input
                    name='password'
                    value={input.password}
                    onChange={handleInputChange}
                    type='password'
                    placeholder='Password'
                  />

                  <p>
                    People who use our service may have uploaded your contact information to Instagram.{' '}
                    <a href='#'>
                      Learn <br /> More
                    </a>
                  </p>
                  <p>
                    By signing up, you agree to our <a href='#'>Terms</a> , <a href='#'>Privacy Policy</a> and{' '}
                    <a href='#'>Cookies Policy.</a>
                  </p>

                  <button type='submit'>Sign up</button>
                </form>
              </div>
              <div className='bottom-wrapper'>
                <p>
                  Have an account ? <Link to='/login'>Login</Link>
                </p>
              </div>

              <div className='get-app'>
                <p>Get the app</p>
                <div className='img-wrap'>
                  <img src={playStoreImg} alt='' />
                  <img src={microsoftImg} alt='' />
                </div>
              </div>
            </div>
            {/* ------ End of Left Side ------- */}
          </div>
        </div>

        <div className='container footer-wrap'>
          <div className='row'>
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

export default Register;
