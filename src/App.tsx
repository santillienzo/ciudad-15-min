import './App.css'
import Countdown from './components/Countdown';
import Evento from './components/Evento';
import Header from './components/Header'
import Hero from './components/Hero'
import Sponsors from './components/Sponsors';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Countdown
        id="countdown"
        limitDate="Oct 19, 2024 21:00:00"
        finalMessage="JUGAR!!"
      />
      <Sponsors />
      <Evento />

    </>
  );
}

export default App
