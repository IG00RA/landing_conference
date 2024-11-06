import About from '@/components/About/About';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
