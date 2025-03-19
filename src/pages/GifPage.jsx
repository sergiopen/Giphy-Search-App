import React, { useEffect, useState } from 'react';
import { getGif } from '../services/getGif';
import '../styles/GifPage.css';
import verifiedIcon from '../assets/verified-icon.png';
import usePageTitle from '../hooks/usePageTitle';

function GifPage ({ params }) {
  const { id } = params;
  const [data, setData] = useState();

  usePageTitle('Gif Info');

  useEffect(() => {
    getGif({ id }).then(setData);
  }, []);

  return (
    <div>
      <h1>Título: {data?.title}</h1>
      {
        data?.trending_datetime.startsWith('0000') ? <h2>Fecha últ. vez tendencia: Nunca</h2> : <h2>Fecha últ. vez tendencia: {data?.trending_datetime}</h2>
      }
      <img className='gif-img' src={data?.images?.downsized_medium?.url} alt="" />
      {
        data?.user?.avatar_url
          ? <div className='autor'>
            <div className="autor-name">
              <h2>@{data?.username}</h2>
              {
                data?.user?.is_verified ? <img src={verifiedIcon} alt="" /> : ''
              }
            </div>
            <img src={data?.user?.avatar_url} alt="" />
            {
              data?.user?.description ? <p>{data?.user?.description}</p> : ''
            }
          </div>
          : ''
      }
    </div>
  );
}

export default GifPage;
