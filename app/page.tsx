import RsvpForm from './components/RSVP';
import Cermony from './components/Cermony';
import Gifts from './components/Gifts';
import Party from './components/Party';
import PracticalInfo from './components/PracticalInfo';
import Speech from './components/Speech';
import Countdown from './components/Countdown';
import Navbar from './components/Navbar';





export default function Home() {
  return (

    
    <main style={{ fontFamily: "sans-serif" }}>
       <Navbar />
      
      <section style={{ textAlign: "center", padding: "4rem 1rem" }}>
        <h1>Nils & Nora 💍</h1>
        <p>Vi gifter oss hösten 2026</p>
      </section>

      <Countdown/>
      <Cermony />
      <Party />
      <PracticalInfo />
      <Gifts />
      <Speech />
      <RsvpForm />

    </main>
  );
}