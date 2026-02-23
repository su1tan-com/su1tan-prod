import Navbar from "../components/Navbar";
import ContactNavSection from "../sections/ContactNavSection";
import AboutNavSection from "../sections/AboutNavSection";
import EducationNavSection from "../sections/EducationNavSection";
import AchievementsNavSection from "../sections/AchievementsNavSection";
import ExperienceNavSection from "../sections/ExperienceNavSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <AboutNavSection />
        <EducationNavSection />
        <ExperienceNavSection />
        <AchievementsNavSection />
        <ContactNavSection />
      </main>
    </>
  );
}
