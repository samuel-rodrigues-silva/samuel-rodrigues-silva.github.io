import { DATA } from '../../common/data/home';
import { Content } from '../Content/Content';
import './Home.scss';

export const Home = () => {
  return (
    <Content>
      {DATA.map((data, index) => (
        <div key={data.id} className='Card'>
          {index % 2 === 0 && <Image src={data.image} />}
          <CardInfo data={data} />
          {index % 2 !== 0 && <Image src={data.image} />}
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
