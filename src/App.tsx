import './App.css'
import Countdown from './components/Countdown';
import Header from './components/Header'
import Hero from './components/Hero'

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
    </>
  );
}

export default App
