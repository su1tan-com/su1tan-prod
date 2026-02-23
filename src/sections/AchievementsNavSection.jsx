
import Awards from "../components/Awards";
import Certifications from "../components/Certifications";
import Recommendations from "../components/Recommendations";

export default function AchievementsNavSection() {
  return (
    <section id="achievements" className="py-10">
        <Awards />
        <Certifications />
        <Recommendations />
    </section>
  );
}
