// import React from 'react'
import Sponsors from './components/features/landingPage/Sponsors';
import Footer from './components/layout/landingPage/Footer';
import Header from './components/layout/landingPage/Header';
// import Layout from './components/layout/landingPage/Layout';
// import Countdown from './components/views/landingPage/Countdown';
import Evento from './components/views/landingPage/Evento';
import Home from './components/views/landingPage/Home';
import Reglas from './components/views/landingPage/Reglas';

const AppLanding = () => {
  return (
    <div>
      {/* <Layout /> */}
      <Header />
      <Home />
      {/* <Countdown
        id="countdown"
        limitDate="Oct 19, 2024 21:00:00"
        finalMessage="JUGAR!!"
      /> */}
      <Sponsors />
      <Evento />
      <Reglas />
      <Footer />
    </div>
  );
}

export default AppLanding