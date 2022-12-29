import Nav from '../SignIn/Nav';
import Avatar from '../../assets/images/Netflix-avatar.png';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { authSelect, logout } from '../../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebase';
import Plans from '../Plans';
export default function Profile() {
  const { user } = useAppSelector(authSelect);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div>
      <Nav />
      <div className='max-w-[500px] mx-auto'>
        <h1 className='text-3xl font-bold text-left border-b-2 border-slate-500'>
          Edit Profile
        </h1>
        <div className='flex mt-5 gap-5'>
          <img src={Avatar} alt='avatar' className='w-36 h-36' />
          <div className='grow'>
            <h2 className='px-5 border py-2 bg-slate-600 mb-5'>{user?.email}</h2>
            <div>
              <p className=' border-b text-xl font-bold border-slate-500'>
                Plans
              </p>
              <Plans />
              <button
                className='py-2 px-5 bg-red-500 mt-6 w-full'
                onClick={() => {
                  dispatch(logout);
                  localStorage.removeItem('user');
                  signOut(auth);
                  navigate('/signin');
                }}
              >
                {t('signOut')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
