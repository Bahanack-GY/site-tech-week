import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import Activities from '../components/Activities';
import Schedule from '../components/Schedule';
import Impact from '../components/Impact';
import ParticipatingSchools from '../components/ParticipatingSchools';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-deep-space">
      <Navbar />
      <Hero />
      <Activities />
      <Vision />
      <Schedule />
      <ParticipatingSchools />
      <Impact />
      <Contact />
    </div>
  );
}