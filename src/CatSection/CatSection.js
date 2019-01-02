import React from 'react';
import CatItem from './CatItem';

const CAT_MAP = [
  {
    name: "Concerts",
    src: "https://static2.kyazoonga.com/Images/kzconsumer/top-categories/concerts-cat1.jpg"
  },
  {
    name: "Cricket",
    src: "https://static2.kyazoonga.com/Images/kzconsumer/top-categories/cricket-cat1.jpg"
  },
  {
    name: "Theatre & Arts",
    src: "https://static2.kyazoonga.com/Images/kzconsumer/top-categories/theatre-cat.jpg"
  },
  {
    name: "Amusement Parks",
    src: "https://static2.kyazoonga.com/Images/kzconsumer/top-categories/amusementparks-cat.jpg"
  },
  {
    name: "Sports",
    src: "https://static2.kyazoonga.com/Images/kzconsumer/top-categories/sports-cat.jpg"
  },
  {
    name: "Restaurants",
    src: "https://static2.kyazoonga.com/Images/kzconsumer/top-categories/restaurants-cat.jpg"
  }
];

const CatSection = () => {
  return (
    <section className="home-cat-sec text-center">
      <div className="container">
        <h2 className="site-title">Browse by top categories</h2>
        { CAT_MAP.map((item => <CatItem key={item.name} {...item} />))}
      </div>
    </section>
  );
};

export default CatSection;