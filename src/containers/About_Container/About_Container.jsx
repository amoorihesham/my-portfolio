import "./style.css";
import SocialCard from "@/components/Global/socialCard/SocialCard";
import SecHeading from "@/components/Global/secHeading/SecHeading";
import PersonalCard from "@/components/Global/personalCard/PersonalCard";
import EduList from "@/components/About_Page/EduList/EduList";

function AboutContainer() {
  return (
    <section className="aboutpage">
      <div className="container">
        <SecHeading
          title="About-me"
          para="Step into the About Page—where my journey meets pixels. Let's illuminate the story together."
        />
        <SocialCard />
        <PersonalCard />
        <EduList />
      </div>
    </section>
  );
}

export default AboutContainer;
