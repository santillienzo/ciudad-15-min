// import React from 'react'
import Home from '@/components/features/landingPage/Home';
import Footer from '../../layout/landingPage/Footer';
import Evento from '@/components/features/landingPage/Evento';
// import Reglas from '@/components/features/landingPage/Reglas';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '@/components/layout/landingPage/Header';
import Participation from '@/components/features/landingPage/Participation';
import AboutUs from '@/components/features/landingPage/AboutUs';
// import Layout from './components/layout/landingPage/Layout';
// import Countdown from './components/views/landingPage/Countdown';

const AppLanding = () => {
  return (
    <ChakraProvider>
      {/* <Layout /> */}
      <Header />
      <Home />
      <AboutUs />
      <Evento />
      {/* <Reglas /> */}
      <Participation/>
      <Footer />
    </ChakraProvider>
  );
}

export default AppLanding