import React from 'react';

const CatItem = (props) => {
  return (
    <div className="col-sm-4 cat-box">
      <a href="#" className="block-link">
        <div className="cat-txt">
          <h3>{props.name}</h3>
        </div>
        <img src={props.src} alt="" className="img-full-width"/>
      </a>
    </div>
  );
};

export default CatItem; 