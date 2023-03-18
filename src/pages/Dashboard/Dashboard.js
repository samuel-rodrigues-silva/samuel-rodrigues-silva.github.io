import { useCallback, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Outlet, Link, useLocation } from 'react-router-dom';
import './Dashboard.scss';

export const Dashboard = () => {
  const [tab, setTab] = useState('home');
  let form = useRef();
  const location = useLocation();

  useEffect(() => {
    setTab(location.pathname);
    emailjs.init('Tz1b7KPr0Z8KRh52t');
  }, [tab, location]);

  const sendEmail = useCallback(async (e) => {
    e.preventDefault();
    await emailjs
      .sendForm(
        'service_6cv407i',
        'template_61cn7nf',
        form.current,
        'Tz1b7KPr0Z8KRh52t'
      )
      .then(
        (result) => {
          console.log(result);
          console.log('Email successfully sent. Thanks for your contact.');
        },
        (error) => {
          console.log(error.text);
          alert('Oops! Something went wrong, please try again later.');
        }
      );
  }, []);

  return (
    <div className='Dashboard'>
      <div className='Dashboard__menu'>
        <ul className='Dashboard__menu__list'>
          <div className='Dashboard__menu__list__container'>
            <Link
              to='/home'
              className='Dashboard__menu__list__container__item'
              style={{
                color:
                  tab === '/home' ? 'var(--warning)' : 'rgba(255,255,255,0.8)',
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
        <form ref={form} onSubmit={sendEmail}>
          <div className='Dashboard__menu__contact'>
            <label for='contact'>Send me a letter</label>
            <label>Name</label>
            <input type='text' name='user_name' />
            <label>Email</label>
            <input type='email' name='user_email' />
            <label>Message</label>
            <textarea name='message' />
            <input type='submit' value='Send' />
            {/* <label for='contact'>Send me a letter</label>
            <input
              type='text'
              name='contact'
              placeholder=''
            /> */}
            <span>Copyright reserved 2023</span>
          </div>
        </form>
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
