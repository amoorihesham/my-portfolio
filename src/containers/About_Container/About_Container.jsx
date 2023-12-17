import "./style.css";
import SocialCard from "@/components/Global/socialCard/SocialCard";
import SecHeading from "@/components/Global/secHeading/SecHeading";
import PersonalCard from "@/components/Global/personalCard/PersonalCard";

function AboutContainer() {
  return (
    <section className="aboutpage">
      <div className="container">
        <SecHeading
          title="About-me"
          para="simple preif about me and my life, Hobbies, Happites."
        />
        <SocialCard />
        <PersonalCard />
      </div>
    </section>
  );
}

export default AboutContainer;
