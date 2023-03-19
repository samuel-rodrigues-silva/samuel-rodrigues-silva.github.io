import { useCallback, useEffect, useRef, useState } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Outlet, Link, useLocation } from 'react-router-dom';

import brazil48 from '../../common/assets/brazil48.png';
import usa48 from '../../common/assets/usa48.png';

import './Dashboard.scss';

export const Dashboard = () => {
  const [tab, setTab] = useState('home');
  const menu = useRef();
  const location = useLocation();

  useEffect(() => {
    setTab(location.pathname);
  }, [tab, location]);

  const handleMenu = useCallback(() => {}, []);

  return (
    <div className='Dashboard'>
      <div className='Dashboard__menu'>
        <ul className='Dashboard__menu__list'>
          <div className='Dashboard__menu__list__container'>
            <Link
              to='/'
              className='Dashboard__menu__list__container__item'
              style={{
                color: tab === '/' ? 'var(--warning)' : 'rgba(255,255,255,0.8)',
              }}
            >
              Home
            </Link>
          </div>
          <div className='Dashboard__menu__list__container'>
            <Link
              to='/gallery'
              className='Dashboard__menu__list__container__item'
              style={{
                color:
                  tab === '/gallery'
                    ? 'var(--warning)'
                    : 'rgba(255,255,255,0.8)',
              }}
            >
              Gallery
            </Link>
          </div>
          <div className='Dashboard__menu__list__container'>
            <Link
              to='contact'
              className='Dashboard__menu__list__container__item'
              style={{
                color:
                  tab === '/contact'
                    ? 'var(--warning)'
                    : 'rgba(255,255,255,0.8)',
              }}
            >
              Contact
            </Link>
          </div>
        </ul>
        <div className='Dashboard__menu__contact'>
          <div className='Dashboard__menu__contact__social'>
            <Link
              target='_blank'
              to='https://github.com/samuel-rodrigues-silva'
              className='Dashboard__menu__contact__social__round'
            >
              <FiGithub></FiGithub>
            </Link>
            <Link
              target='_blank'
              to='https://www.linkedin.com/in/samuel-silva-2b5651197/'
              className='Dashboard__menu__contact__social__round'
            >
              <FiLinkedin></FiLinkedin>
            </Link>
          </div>
          <span>Copyright reserved 2023</span>
          <div className='Dashboard__menu__contact__flags'>
            <div
              className='Dashboard__menu__contact__flags__round'
              style={{ backgroundImage: `url(${brazil48})` }}
            ></div>
            <div
              className='Dashboard__menu__contact__flags__round'
              style={{ backgroundImage: `url(${usa48})` }}
            ></div>
          </div>
        </div>
        <div className='Dashboard__menu__dot-column'>
          {Array(120)
            .fill(0)
            .map((_) => (
              <>
                <div>__</div>
                <div>_</div>
              </>
            ))}
        </div>
      </div>
      <div className='Dashboard__content'>
        <div
          className='Dashboard__content__hamb'
          ref={menu}
          onClick={handleMenu}
        >
          <GiHamburgerMenu></GiHamburgerMenu>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
