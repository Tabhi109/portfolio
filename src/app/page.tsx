import { AboutTeaser } from "@/components/home/AboutTeaser";
import { ContactCTA } from "@/components/home/ContactCTA";
import { EngineeringNotes } from "@/components/home/EngineeringNotes";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { HeroSection } from "@/components/home/HeroSection";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SelectedWorkSection />
      <ExperiencePreview />
      <EngineeringNotes />
      <AboutTeaser />
      <ContactCTA />
    </main>
  );
}
