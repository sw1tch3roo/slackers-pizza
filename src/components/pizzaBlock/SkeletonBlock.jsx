import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block" // стили как у пицц
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    // {...props}
  >
    <circle cx="135" cy="125" r="125" />
    <rect x="0" y="270" rx="10" ry="10" width="280" height="25" />
    <rect x="0" y="317" rx="10" ry="10" width="280" height="85" />
    <rect x="0" y="430 " rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="422" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
