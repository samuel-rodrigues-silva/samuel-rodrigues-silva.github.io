import React, { useEffect, useState } from 'react';
import { DATA } from '../../common/data/home';
import { Content } from '../Content/Content';
import './Home.scss';

export const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });

    const startAnimation = (entries, _) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('appear', entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(startAnimation);
    const options = { root: null, rootMargin: '0px', threshold: 1 };

    const elements = document.querySelectorAll('.Card__info');
    elements.forEach((el) => {
      observer.observe(el, options);
    });
  }, [width]);

  return (
    <Content>
      {DATA.map((data, index) => (
        <div key={data.id} className='Card'>
          {width > 800 && (
            <React.Fragment>
              {index % 2 === 0 && <Image src={data.image} />}
              <CardInfo data={data} />
              {index % 2 !== 0 && <Image src={data.image} />}
            </React.Fragment>
          )}
          {width < 800 && (
            <React.Fragment>
              <Image src={data.image} />
              <CardInfo data={data} />
            </React.Fragment>
          )}
        </div>
      ))}
    </Content>
  );
};

const Image = ({ src }) => {
  return (
    <div
      className='Card__img'
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.9)), url(${src})`,
      }}
    ></div>
  );
};

const CardInfo = ({ data }) => {
  return (
    <div className='Card__info'>
      <span>{data.label}</span>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
};
