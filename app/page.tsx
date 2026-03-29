import RsvpForm from './components/RSVP';

export default function Home() {
  return (
    <main style={{
      display: "flex",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      fontFamily: "sans-serif"
    }}>
      <h1>Nils & Nora 💍</h1>
      <p>Vi gifter oss hösten 2026</p>
       <RsvpForm />
    </main>
  );
}