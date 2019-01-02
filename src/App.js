import React, { Component, Fragment } from 'react';
import Nav from './Nav/Nav';
import Carousel from './Carousel/Carousel';
import HotTickets from './HotTickets/HotTickets';
import CatSection from './CatSection/CatSection';
import HomeCat from './HomeCat/HomeCat';
import Featured from './Featured/Featured';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Carousel />
        <HotTickets/>
        <CatSection/>
        <HomeCat/>
        <Featured/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
