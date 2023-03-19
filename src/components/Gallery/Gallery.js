import { Content } from '../Content/Content';
import './Gallery.scss';
import { DATA } from '../../common/data/gallery';

export const Gallery = () => {
  return (
    <Content>
      {DATA.map((data) => (
        <div key={data.id} className='Gallery'>
          <div className='Gallery__img-container'>
            <div
              className='Gallery__img-container__1'
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.1)) ,url(${data.image})`,
              }}
            ></div>
            <div
              className='Gallery__img-container__2'
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.1)) ,url(${data.image2})`,
              }}
            ></div>
          </div>
          <div className='Gallery__info'>
            <span>{data.label}</span>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
        </div>
      ))}
    </Content>
  );
};
