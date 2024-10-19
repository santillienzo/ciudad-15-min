// import React from 'react'
import Home from '@/components/features/landingPage/Home';
import Footer from '../../layout/landingPage/Footer';
import MoreAbout from '@/components/features/landingPage/MoreAbout';
// import Reglas from '@/components/features/landingPage/Reglas';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '@/components/layout/landingPage/Header';
import Participation from '@/components/features/landingPage/Participation';
import AboutUs from '@/components/features/landingPage/Motivation';
import Instructions from '@/components/features/landingPage/Instructions';
// import Layout from './components/layout/landingPage/Layout';
// import Countdown from './components/views/landingPage/Countdown';

const AppLanding = () => {
  return (
    <ChakraProvider>
      <Header />
      <Home />
      <AboutUs />
      <MoreAbout />
      <Participation/>
      <Instructions/>
      <Footer />
    </ChakraProvider>
  );
}

export default AppLanding