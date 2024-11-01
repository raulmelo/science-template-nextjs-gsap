import HeroSection from '@/components/sections/hero';
import FeaturesSection from '@/components/sections/features';
import CardsSection from '@/components/sections/cards';
import ClientsSection from '@/components/sections/clients';

export default function Home() {
  return (
    <main className="bg-background">
      <HeroSection />
      <FeaturesSection />
      <CardsSection />
      <ClientsSection />
    </main>
  );
}