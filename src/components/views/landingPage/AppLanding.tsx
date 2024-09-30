// import React from 'react'
import Home from '@/components/features/landingPage/Home';
import Sponsors from '../../features/landingPage/Sponsors';
import Footer from '../../layout/landingPage/Footer';
import Header from '../../layout/landingPage/Header';
import Evento from '@/components/features/landingPage/Evento';
import Reglas from '@/components/features/landingPage/Reglas';
import { ChakraProvider } from '@chakra-ui/react';
// import Layout from './components/layout/landingPage/Layout';
// import Countdown from './components/views/landingPage/Countdown';

const AppLanding = () => {
  return (
    <ChakraProvider>
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
    </ChakraProvider>
  );
}

export default AppLanding