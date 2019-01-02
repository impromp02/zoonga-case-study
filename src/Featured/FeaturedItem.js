import React from 'react';

const FeaturedItem = (props) => {
  return (
    <a target="_blank" href={props.add}>
      <img src={props.src} alt="Forbes"/>
    </a>
  );
}

export default FeaturedItem;