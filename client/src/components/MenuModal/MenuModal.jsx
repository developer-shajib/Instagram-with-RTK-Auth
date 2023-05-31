import { AiFillSetting, AiOutlineSave } from 'react-icons/ai';
import { BsClockHistory, BsFillSunFill } from 'react-icons/bs';
import { GoReport } from 'react-icons/go';
import './MenuModal.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../features/Instagram/InstaApi.jsx';

const MenuModal = ({ hide, setImages, children }) => {
  const dispatch = useDispatch();

  const handleModalCloseBtn = (e) => {
    hide(false);
    setImages([]);
  };
  return (
    <>
      <div className='modal-main'>
        <div className='modal-main-wrapper'>
          <div className='modal-wrapper1'>
            <ul>
              <li>
                <a href='#'>
                  <AiFillSetting /> Sttings
                </a>
              </li>
              <li>
                <a href='#'>
                  <BsClockHistory /> Your activity
                </a>
              </li>
              <li>
                <a href='#'>
                  <AiOutlineSave /> Saved
                </a>
              </li>
              <li>
                <a href='#'>
                  <BsFillSunFill /> Switch appearance
                </a>
              </li>
              <li>
                <a href='#'>
                  <GoReport /> Report a problem
                </a>
              </li>
            </ul>
          </div>
          <div className='modal-wrapper2'>
            <ul>
              <li>
                <a href='#'>Switch accounts</a>
              </li>
              <li>
                <Link onClick={() => dispatch(logoutAction())} to='/login'>
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuModal;
