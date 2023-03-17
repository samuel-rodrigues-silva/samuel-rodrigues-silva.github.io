import { Outlet, Link } from 'react-router-dom';
import './Dashboard.scss';

export const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <div className='Dashboard__menu'>
        <ul className='Dashboard__menu__list'>
          <div className='Dashboard__menu__list__container'>
            <Link to='/home' className='Dashboard__menu__list__container__item'>
              Home
            </Link>
          </div>
          <div className='Dashboard__menu__list__container'>
            <Link
              to='/gallery'
              className='Dashboard__menu__list__container__item'
            >
              Gallery
            </Link>
          </div>
          <div className='Dashboard__menu__list__container'>
            <Link
              to='contact'
              className='Dashboard__menu__list__container__item'
            >
              Contact
            </Link>
          </div>
        </ul>
        <div className='Dashboard__menu__contact'>
          <label for='contact'>Send me a letter</label>
          <input type='text' name='contact' placeholder='Enter Email Message' />
          <span>Copyright reserved 2023</span>
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
        <Outlet></Outlet>
      </div>
    </div>
  );
};
