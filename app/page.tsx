import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Work from '@/components/Work';
import Stack from '@/components/Stack';
import Personal from '@/components/Personal';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Work />
        <Stack />
        <Personal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
