import React from 'react';
// import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import s from './';

// import { logout, selectUser } from '../../features/userSlice';

export default function Home() {
//   useStyles(s);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>React.js News</h1>
        {news.map(item => (
          <article key={item.link} className={s.newsItem}>
            <h1 className={s.newsTitle}>
              <a href={item.link}>{item.title}</a>
            </h1>
            <div
              className={s.newsDesc}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </article>
        ))}
      </div>
    </div>
  );
}