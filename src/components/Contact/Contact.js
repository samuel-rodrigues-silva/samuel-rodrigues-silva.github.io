import { Content } from '../Content/Content';
import { AiOutlinePhone } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi';
import './Contact.scss';

export const Contact = () => {
  return (
    <Content>
      <div className='Contact'>
        <div className='Contact__card'>
          <div className='Contact__card__info'>
            <h1>LOREM IPSUM</h1>
            <p>LORM IPSUM DOLOREM SIT AMET CONSECTUR</p>
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
          <div className='Contact__card__content'></div>
        </div>
      </div>
    </Content>
  );
};
