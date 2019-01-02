import React from 'react';
import HotTicketItem from './HotTicketItem';

// eslint-disable anchor-is-valid

const HotTickets = () => {
  let elements = [];
  for(let i=1; i<=6; i++) {
    elements.push(<HotTicketItem key={i}/>)
  }
  return (
    <section className="hot-ticket-sec ticket-boxes">
      <div className="container">
        <h2 className="site-title">Hot Tickets
          <small>Get tickets to your favourite events</small>
        </h2>
        <div className="row">
          {elements}
          <div className="btn-sec text-center p-20 pt-0">
            <a href="#" className="btn btn-primary btn-custome-lg">Discover More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotTickets;