import { Content } from '../Content/Content';
import { AiOutlinePhone } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Contact.scss';

export const Contact = () => {
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  let form = useRef();

  useEffect(() => {
    emailjs.init('Tz1b7KPr0Z8KRh52t');
  }, []);

  const sendEmail = useCallback(async (e) => {
    e.preventDefault();
    setIsSendingEmail(true);
    await emailjs
      .sendForm(
        'service_6cv407i',
        'template_61cn7nf',
        form.current,
        'Tz1b7KPr0Z8KRh52t'
      )
      .then(
        (result) => {
          form.current.reset();
          setIsSendingEmail(false);
          toast('Email successfully sent. Thanks for your contact.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        },
        (error) => {
          toast('Oops! Something went wrong, please try again later.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
      );
  }, []);
  return (
    <Content>
      <div className='Contact'>
        <div className='Contact__card'>
          <div className='Contact__card__info'>
            <h1>Send me a letter</h1>
            <p>Let's get in touch</p>
            <div className='Contact__card__info__item'>
              <div className='Contact__card__info__item__round'>
                <div className='Contact__card__info__item__round__icon'>
                  <AiOutlinePhone></AiOutlinePhone>
                </div>
                <h5>Phone: </h5>
                <p> +55 359727-8910</p>
              </div>
              <div className='Contact__card__info__item__round'>
                <div className='Contact__card__info__item__round__icon'>
                  <GoLocation></GoLocation>
                </div>
                <h5>Location: </h5>
                <p>Pouso Alegre - MG</p>
              </div>
              <div className='Contact__card__info__item__round'>
                <div className='Contact__card__info__item__round__icon'>
                  <HiOutlineMail></HiOutlineMail>
                </div>
                <h5>Email: </h5>
                <p>Samuellsilva74@gmail.com</p>
              </div>
            </div>
            <div className='Contact__card__info__item'></div>
            <div className='Contact__card__info__item'></div>
          </div>
          <div className='Contact__card__content'>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type='text' name='user_name' required />
              <label>Email</label>
              <input type='email' name='user_email' required />
              <label>Message</label>
              <textarea name='message' required />
              <button type='submit'>Send</button>
            </form>
            {isSendingEmail && <p>SENDING...</p>}
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </Content>
  );
};
