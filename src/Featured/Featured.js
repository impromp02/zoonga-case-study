import React from 'react';
import FeaturedItem from './FeaturedItem';

let FEATURED_MAP = [
  {
    add: "https://www.forbes.com/sites/julianmitchell/2017/06/08/this-ticketing-platform-aims-to-overthrow-ticketmaster-and-stubhub-as-global-leader/#2eee65851bc2",
    src: "https://static3.kyazoonga.com/Images/featured-logo/forbes-logo.jpg" 
  },
  {
    add: "https://tech.co/technology-upgrading-events-industry-2017-06",
    src: "https://static3.kyazoonga.com/Images/featured-logo/techco-logo.jpg"
  },
  {
    add: "https://www.ausleisure.com.au/news/forbes-names-kyazoonga-as-the-fastest-growing-international-online-ticket-p/",
    src: "https://static3.kyazoonga.com/Images/featured-logo/ausleisure-logo.jpg"
  },
  {
    add: "http://www.inc.com/drew-hendricks/top-3-trends-driving-change-for-the-events-industry.html",
    src: "https://static3.kyazoonga.com/Images/featured-logo/inc-logo.jpg" 
  },
  {
    add: "https://www.entrepreneur.com/article/289909",
    src: "https://static3.kyazoonga.com/Images/featured-logo/entrepreneur-magazine.jpg"
  },
  {
    add: "https://www.youtube.com/watch?v=1aSuorjmrRs",
    src: "https://static3.kyazoonga.com/Images/featured-logo/cnbc.jpg"
  },
  {
    add: "http://zeenews.india.com/exclusive/guns-n-roses-in-delhi-waiting-with-impatience-for-the-next-time_5910.html",
    src: "https://static3.kyazoonga.com/Images/featured-logo/z-news.jpg"
  },
  {
    add: "http://tech.economictimes.indiatimes.com/news/startups/ratan-tata-invests-undisclosed-amount-in-e-ticketing-startup-kyazoonga/52681961",
    src: "https://static3.kyazoonga.com/Images/featured-logo/the-economic-times.jpg"
  },
  {
    add: "http://timesofindia.indiatimes.com/australia-in-india-2009/top-stories/MCA-appoints-KyaZoonga-com-as-the-official-ticketing-partner/articleshow/5196286.cms",
    src: "https://static3.kyazoonga.com/Images/featured-logo/the-times-of-india.jpg"
  },
  {
    add: "http://www.business-standard.com/article/companies/ratan-tata-invests-in-kyazoonga-116061000326_1.html",
    src: "https://static3.kyazoonga.com/Images/featured-logo/business-standard.jpg"
  },
  {
    add: "http://www.news18.com/news/buzz/guns-n-roses-india-tour-80-tickets-outlets-opened-524376.html",
    src: "https://static3.kyazoonga.com/Images/featured-logo/news18.jpg"
  },
  {
    add: "https://sports.ndtv.com/india-vs-west-indies-2013-14/sachin-tendulkars-200th-test-tickets-sold-out-in-15-hours-kyazoongacom-1527446",
    src: "https://static3.kyazoonga.com/Images/featured-logo/ndtv.jpg"
  }
];

const Featured = () => {
  return (
    <section className="home-featured-sec text-center">
      <h2 className="site-title">
        <span>We've been featured in</span>
      </h2>
      <div className="container-fluid">
        {FEATURED_MAP.map((item, i) => <FeaturedItem key={i} {...item}/>)}
      </div>
    </section>
  );
};

export default Featured;