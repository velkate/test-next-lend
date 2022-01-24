import React from 'react';

import Header from '../components/Header';
import ServiceFeedback from '../components/ServiceFeedback';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <ServiceFeedback />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
