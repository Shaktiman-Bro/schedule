import Header from '../components/header/header';
import Hero from '../components/hero/hero';
import NutshellSection from '../components/nutshell/nutshell';
import DNASection from '../components/dna/dna';
import TrySection from '../components/try/try';
import Footer from '../components/footer/footer';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <NutshellSection />
      <DNASection />
      <TrySection />
      <Footer />
    </div>
  )
}
